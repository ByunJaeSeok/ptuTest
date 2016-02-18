import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import timeFilter from './timeFilter';

import PeriodSelector from './components/PeriodSelector';
import './index.css';

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

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedWeek: 'all',
      selectedTime: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };

    this.setWeek = this.setWeek.bind(this);
    this.onPeriodChange = this.onPeriodChange.bind(this);
  }

  setWeek(event) {
    this.setState({
      selectedWeek: event.target.value,
    });
  }

  onPeriodChange(result) {
    console.log(result)
    this.setState({
      selectedTime: result,
    });
  }


  render() {
    var selectedWeek = this.state.selectedWeek;
    var filteredClassList = timeFilter(classList, this.state.selectedTime);
    return (
      <div className="Index">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">평택대 수강신청</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a className="dropdown-toggle" data-toggle="dropdown" href="#">이수구분<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">전공</a></li>
                  <li><a href="#">교양</a></li>
                  <li><a href="#">PTU교양</a></li>
                </ul>
              </li>
              <li><a href="timetable.html">예비시간표</a></li>
              <li><a href="basket.html">장바구니</a></li>
              <li><a href="#">학교 홈페이지</a></li>
              <li><a href="#">학사정보</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="well">
                <h3>요일선택</h3>
                <hr />
                <form role="form">
                  <label className="radio-inline" data-type="mon" >
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="월"/>월
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="화"/>화
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="수"/>수
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="목"/>목
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="금"/>금
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.setWeek } value="all" checked/>
                    전체
                  </label>
                </form>
              </div>
              <PeriodSelector onChange={ this.onPeriodChange } />
            </div>
            <div className="col-md-9">
              <h2>2016년 1학기 강의시간표</h2>
              <table style={{width: '75%'}} className="table table-striped">
                <thead>
                  <tr>
                    <th>학수번호</th>
                    <th>이수구분</th>
                    <th>과목명</th>
                    <th>교수명</th>
                    <th>학년</th>
                    <th>요일</th>
                    <th>시간</th>
                  </tr>
                </thead>
                <tbody>
                {
                _.map(filteredClassList, function(value, index) {
                  if (value.week !== selectedWeek && selectedWeek !== 'all') {
                    return null;
                  }

                  return (
                      <tr key={index}>
                        <td>{value.classID}</td>
                        <td>{value.classType}</td>
                        <td>{value.className}</td>
                        <td>{value.professor}</td>
                        <td>{value.grade}</td>
                        <td>{value.week}</td>
                        <td>{value.classTime.join(', ')}</td>
                      </tr>
                    );
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
