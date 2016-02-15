import _ from 'lodash';

function timeFilter(classList, selectedTimes) {
  const result = _.filter(classList, function (classItem) {
    return _.difference(selectTimes, times);
  });

  return result;
}

export default timeFilter;
