import _ from 'lodash';

function timeFilter(classList, selectedTimes) {
  const result = _.filter(classList, function (classItem) {
    return !_.difference(selectedTimes, classItem.classTime).length;
    // 앞에 !를 붙혀서 0 이면 true 나머지는 false로 되게함
  });
  return result;
}

export default timeFilter;


// [2, 3, 4][3, 4]
// [2]
//
// [3, 4][3, 4, 5]
// []
