import fs from 'fs';
import path from 'path';
import globule from 'globule';
import _ from 'lodash';
import mkdirp from 'mkdirp';
import xlsxj from 'xlsx-to-json';
import chalk from 'chalk';
import promisify from 'es6-promisify';
import rimraf from 'rimraf';

const red = chalk.red;
const xlsxToJson = promisify(xlsxj);
const BUILD_PATH = path.join(__dirname, '../build/data');

async function xlsxConvert(path) {
  try {
    const result = await xlsxToJson({
      input: path,
      output: 'output.json',
    });
    rimraf.sync('output.json');

    return result;
  } catch (e) {
    console.log(red(e));
  }
}

const filePatterns = globule.find(path.join(__dirname, '../db/**/*.xlsx'));
rimraf.sync(BUILD_PATH);

_.map(filePatterns, async (filePath) => {
  const { name } = path.parse(filePath);
  const extractData = await xlsxConvert(filePath);
  const data = _.chain(extractData)
    .map((classItem) => {
      if (!classItem.classID) return {};
      const timeList = classItem.classTime.split(',');
      const classTime =  _.isEmpty(timeList) ? [] : _.map(timeList, _.toNumber);
      return {
        ...classItem,
        classTime,
      };
    })
    .compact()
    .values();

  mkdirp.sync(BUILD_PATH);
  fs.writeFileSync(path.join(BUILD_PATH, `${name}.json`), JSON.stringify(data, null, ' '));
  console.log(chalk.green(`${name}.json extract done`));
})
