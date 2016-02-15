import _ from 'lodash';

function timeFilter(classList, selectedTimes) {
  const result = _.filter(classList, function (classItem) {
    if(_.difference(selectedTimes, classItem.classTime).length==0){
      return _.difference(selectedTimes, classItem.classTime);
    }
  });

  return result;
}

export default timeFilter;


// [2, 3, 4][3, 4]
// [2]
//
// [3, 4][3, 4, 5]
// []
