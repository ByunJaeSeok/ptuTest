import { expect } from 'chai';
import timeFilter from '../timeFilter';

describe('timeFilter', () => {
  it('#timeFilter can filter with one time', async () => {
    const classList = [{
      classID: '임시1',
      classTime: [2, 3, 4],
    }, {
      classID: '임시2',
      classTime: [3, 4],
    }];

    const selectedTime = [2];
    const result = timeFilter(classList, selectedTime);

    expect(result.length).to.equal(1);
  });

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

    expect(result).to.deep.equal([{
      classID: '임시1',
      classTime: [2, 3, 4],
    }]);
  });

  it('#timeFilter can get all list', async () => {
    const classList = [{
      classID: '임시1',
      classTime: [2, 3, 4],
    }, {
      classID: '임시2',
      classTime: [3, 4],
    }];

    const selectedTime = [2, 3, 4];
    const result = timeFilter(classList, selectedTime);

    expect(result).to.deep.equal([classList[0]]);
  });
});
