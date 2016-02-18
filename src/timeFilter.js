import _ from 'lodash';

function timeFilter(classList, selectedTimes) {
  const result = _.filter(classList, function (classItem) {
    // 앞에 !를 붙혀서 0 이면 true 나머지는 false로 되게함
    return !_.difference(selectedTimes, classItem.classTime).length;
  });
  return result;
}

export default timeFilter;
