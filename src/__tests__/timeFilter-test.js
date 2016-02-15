import { expect } from 'chai';
import timeFilter from '../timeFilter';

describe('timeFilter', () => {
  // it('#timeFilter can filter with one time', async () => {
  //   const classList = [{
  //     classID: '임시1',
  //     classTime: [2, 3, 4],
  //   }, {
  //     classID: '임시2',
  //     classTime: [3, 4],
  //   }];
  //
  //   const selectedTime = [2];
  //   const result = timeFilter(classList, selectedTime);
  //
  //   expect(result.length).to.equal(1);
  // });

  it('#timeFilter can filter with time', async () => {
    const classList = [{
      classID: '임시1',
      classTime: [2, 3, 4],
    }, {
      classID: '임시2',
      classTime: [3, 4],
    }];

    const selectedTime = [2, 3];
    const result = timeFilter(classList, selectedTime);

    //expect(result.length).to.equal(1)
    // console.log(result[0]);
    // console.log(result);
    expect(result).to.deep.equal([{
      classID: '임시1',
      classTime: [2, 3, 4],
    }]);
  });
});
