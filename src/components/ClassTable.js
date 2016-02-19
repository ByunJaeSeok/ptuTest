import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import timeFilter from '../timeFilter';

const propTypes = {
};

const defaultProps = {
};
var classList = [{
  classID: '임시1',
  classType: '전필',
  className: '컴퓨터구조',
  professor: '윤석규',
  grade: '1',
  week: '수',
  classTime: [2, 3, 4],
}, {
  classID: '임시2',
  classType: '전선',
  className: '자료구조',
  professor: '문원식',
  grade: '2',
  week: '목',
  classTime: [6, 7, 8],
}, {
  classID: '임시3',
  classType: '전필',
  className: '안드로이드',
  professor: '양단희',
  grade: '3',
  week: '월',
  classTime: [1, 3, 4],
}, {
  classID: '임시4',
  classType: '교선',
  className: 'c#',
  professor: '조영희',
  grade: '4',
  week: '월',
  classTime: [6, 7, 8],
}, {
  classID: '임시5',
  classType: '교선',
  className: '엑셀',
  professor: '양단희',
  grade: '3',
  week: '월',
  classTime: [2, 3],
}, {
  classID: '임시6',
  classType: '전선',
  className: '운영체제',
  professor: '문원식',
  grade: '1',
  week: '금',
  classTime: [5, 7, 8],
}, {
  classID: '임시7',
  classType: '전필',
  className: '안드로이드',
  professor: '양단희',
  grade: '2',
  week: '월',
  classTime: [2, 3, 4],
}, {
  classID: '임시8',
  classType: '교필',
  className: '안드로이드',
  professor: '양단희',
  grade: '4',
  week: '월',
  classTime: [2, 3, 4],
}];

class ClassTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: 'all',
      selectedTime: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  render() {
    var selectedWeek = this.state.selectedWeek;
    var filteredClassList = timeFilter(classList, this.state.selectedTime);
    return (
      <div>
        <h2>2016년 1학기 강의시간표</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>학수번호</TableHeaderColumn>
                <TableHeaderColumn>이수구분</TableHeaderColumn>
                <TableHeaderColumn>과목명</TableHeaderColumn>
                <TableHeaderColumn>교수명</TableHeaderColumn>
                <TableHeaderColumn>학년</TableHeaderColumn>
                <TableHeaderColumn>요일</TableHeaderColumn>
                <TableHeaderColumn>시간</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
              _.map(filteredClassList, function(value, index) {
                if (value.week !== selectedWeek && selectedWeek !== 'all') {
                  return null;
                }

                return (
                    <TableRow key={index}>
                      <TableRowColumn>{value.classID}</TableRowColumn>
                      <TableRowColumn>{value.classType}</TableRowColumn>
                      <TableRowColumn>{value.className}</TableRowColumn>
                      <TableRowColumn>{value.professor}</TableRowColumn>
                      <TableRowColumn>{value.grade}</TableRowColumn>
                      <TableRowColumn>{value.week}</TableRowColumn>
                      <TableRowColumn>{value.classTime.join(', ')}</TableRowColumn>
                    </TableRow>
                  );
              })
              }
            </TableBody>
          </Table>
      </div>
    );
  }
}

ClassTable.propTypes = propTypes;
ClassTable.defaultProps = defaultProps;


export default ClassTable;
