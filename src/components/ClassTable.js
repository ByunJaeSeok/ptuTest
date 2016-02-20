import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';

import {Table, Column, Cell} from 'fixed-data-table';

import timeFilter from '../timeFilter';
const propTypes = {
  selectedDepartment: PropTypes.string,
  selectedWeek: PropTypes.string,
  selectedTime: PropTypes.array,
  tableWidth: PropTypes.number,
  tableHeight: PropTypes.number,
};

const defaultProps = {
  selectedWeek: 'all',
  selectedTime: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  tableWidth: 1000,
  tableHeight: 600,
};

const styles = {
  isSending: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    background: 'rgba(255,255,255,0.7)',
    width: '100%',
    height: '100%',
    zIndex: '10',
  },
  spinner: {
    width: '200px',
    height: '200px',
    top: '30%',
  },
  idColumn: {
    width: '60px',
  },
  classColumn: {
    // width: '310px',
  },
  weekColumn: {
    width: '30px',
  },
};


function colorizeText(str, index) {
  var val, n = 0;
  return str.split('').map((letter) => {
    val = index * 70 + n++;
    var color = 'hsl(' + val + ', 100%, 50%)';
    return <span style={{color}} key={val}>{letter}</span>;
  });
}

const TextCell = ({rowIndex, data, col, ...props}) => {
  const selectedData = data[rowIndex] || {};
  return (
    <Cell {...props}>
      {selectedData[col]}
    </Cell>
  )
};

const ArrayTextCell = ({rowIndex, data, col, ...props}) => {
  const selectedData = data[rowIndex] || {};

  return (
    <Cell {...props}>
      {selectedData[col].join(', ')}
    </Cell>
  )
};

class ClassTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classList: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const selectedDepartment = this.props.selectedDepartment;
    this.fetchData(selectedDepartment);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.selectedDepartment);
  }

  fetchData(selectedDepartment) {
    this.setState({ isLoading: true });
    fetch(`data/${selectedDepartment}.json`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          classList: json,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { selectedWeek, tableWidth,
      tableHeight, selectedTime,
    } = this.props;
    const { classList, isLoading } = this.state;
    const filterTimeList = timeFilter(classList, selectedTime);

    const filterWeekList = _.filter(filterTimeList, (value, index) => {
      if (value.week !== selectedWeek && selectedWeek !== 'all') {
        return null;
      }
      return value;
    });

    return (
      <div>
        { isLoading ?
          <div style={ styles.isSending }>
            <div style={ styles.spinner } className="sk-fading-circle">
              <div className="sk-circle1 sk-circle" />
              <div className="sk-circle2 sk-circle" />
              <div className="sk-circle3 sk-circle" />
              <div className="sk-circle4 sk-circle" />
              <div className="sk-circle5 sk-circle" />
              <div className="sk-circle6 sk-circle" />
              <div className="sk-circle7 sk-circle" />
              <div className="sk-circle8 sk-circle" />
              <div className="sk-circle9 sk-circle" />
              <div className="sk-circle10 sk-circle" />
              <div className="sk-circle11 sk-circle" />
              <div className="sk-circle12 sk-circle" />
            </div>
          </div>
        : null }

        <h2>2016년 1학기 강의시간표</h2>
        <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={filterWeekList.length}
          width={tableWidth}
          height={tableHeight}
        >
          <Column
            header={<Cell>학수번호</Cell>}
            cell={<TextCell data={filterWeekList} col="classID" />}
            fixed={true}
            width={100}
          />
          <Column
            header={<Cell>이수구분</Cell>}
            cell={<TextCell data={filterWeekList} col="classType" />}
            fixed={true}
            width={100}
          />
          <Column
            header={<Cell>과목명</Cell>}
            cell={<TextCell data={filterWeekList} col="className" />}
            fixed={true}
            width={300}
            flexGrow={2}
          />
          <Column
            header={<Cell>교수명</Cell>}
            cell={<TextCell data={filterWeekList} col="professor" />}
            fixed={true}
            width={100}
            flexGrow={2}
          />
          <Column
            header={<Cell>학년</Cell>}
            cell={<TextCell data={filterWeekList} col="grade" />}
            fixed={true}
            width={100}
            flexGrow={1}
          />
          <Column
            header={<Cell>요일</Cell>}
            cell={<TextCell data={filterWeekList} col="week" />}
            fixed={true}
            width={100}
          />
          <Column
            header={<Cell>시간</Cell>}
            cell={<ArrayTextCell data={filterWeekList} col="classTime" />}
            fixed={true}
            width={100}
          />
        </Table>
     </div>
    );
  }
}

ClassTable.propTypes = propTypes;
ClassTable.defaultProps = defaultProps;


export default ClassTable;

// <Table>
//   <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
//     <TableRow>
//       <TableHeaderColumn style={styles.idColumn}>학수번호</TableHeaderColumn>
//       <TableHeaderColumn style={styles.idColumn}>이수구분</TableHeaderColumn>
//       <TableHeaderColumn style={styles.classColumn}>과목명</TableHeaderColumn>
//       <TableHeaderColumn>교수명</TableHeaderColumn>
//       <TableHeaderColumn>학년</TableHeaderColumn>
//       <TableHeaderColumn style={styles.weekColumn}>요일</TableHeaderColumn>
//       <TableHeaderColumn style={styles.idColumn}>시간</TableHeaderColumn>
//     </TableRow>
//   </TableHeader>
//   <TableBody displayRowCheckbox={false}>
//     {
      // _.map(filterWeekList, function (value, index) {
      //   if (value.week !== selectedWeek && selectedWeek !== 'all') {
      //     return null;
      //   }
//
//         return (
//           <TableRow key={index}>
//             <TableRowColumn
//               style={styles.idColumn}
//             >
//               {value.classID}
//             </TableRowColumn>
//             <TableRowColumn
//               style={styles.idColumn}
//             >
//               {value.classType}
//             </TableRowColumn>
//             <TableRowColumn
//               style={styles.classColumn}
//             >
//               {value.className}
//             </TableRowColumn>
//             <TableRowColumn>
//               {value.professor}
//             </TableRowColumn>
//             <TableRowColumn>
//               {value.grade}
//             </TableRowColumn>
//             <TableRowColumn
//               style={styles.weekColumn}
//             >
//               {value.week}
//             </TableRowColumn>
//             <TableRowColumn
//               style={styles.idColumn}
//             >
//               {value.classTime.join(', ')}
//             </TableRowColumn>
//           </TableRow>
//         );
//       })
//     }
//   </TableBody>
// </Table>
