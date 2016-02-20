import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import timeFilter from '../timeFilter';
const propTypes = {
  selectedDepartment: PropTypes.string,
  selectedWeek: PropTypes.string,
  selectedTime: PropTypes.array,
};

const defaultProps = {
  selectedWeek: 'all',
  selectedTime: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    const selectedWeek = this.props.selectedWeek;
    const { classList, isLoading } = this.state;
    const filteredClassList = timeFilter(classList, this.props.selectedTime);

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
                _.map(filteredClassList, function (value, index) {
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
