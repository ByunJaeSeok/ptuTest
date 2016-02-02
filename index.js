const Component = React.Component;

var classList = [{
  classID: '임시1',
  classType: '전필',
  className: '컴퓨터구조',
  professor: '윤석규',
  week: '수',
  classTime: [2, 3, 4],
}, {
  classID: '임시2',
  classType: '전선',
  className: '자료구조',
  professor: '문원식',
  week: '목',
  classTime: [6, 7, 8],
}, {
  classID: '임시3',
  classType: '전필',
  className: '안드로이드',
  professor: '양단희',
  week: '월',
  classTime: [2, 3, 4],
}, {
  classID: '임시4',
  classType: '교선',
  className: 'c#',
  professor: '조영희',
  week: '월',
  classTime: [6, 7, 8],
}, {
  classID: '임시5',
  classType: '교선',
  className: '엑셀',
  professor: '양단희',
  week: '월',
  classTime: [2, 3],
}, {
  classID: '임시6',
  classType: '전선',
  className: '운영체제',
  professor: '문원식',
  week: '금',
  classTime: [6, 7, 8],
}, {
  classID: '임시7',
  classType: '전필',
  className: '안드로이드',
  professor: '양단희',
  week: '월',
  classTime: [2, 3, 4],
}, {
  classID: '임시8',
  classType: '교필',
  className: '안드로이드',
  professor: '양단희',
  week: '월',
  classTime: [2, 3, 4],
}];

function filterByValues(collection, property, values) {
  return _.filter(collection, function(item) {
    return !_.chain(item[property])
      .map(function(time) {
        return _.includes(values, time);
      })
      .compact()
      .isEmpty()
      .value();
  });
}

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedWeek: 'all',
      selectedTime: [1,2,3,4,5,6,7,8,9]
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      selectedWeek: event.target.value
    });
  }

  render() {
    var selectedWeek = this.state.selectedWeek;
    var filteredClassList = filterByValues(classList, 'classTime',
      this.state.selectedTime);

    return (
      <div className="Index">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">평택대 수강신청</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">예비시간표</a></li>
              <li><a href="#">장바구니</a></li>
              <li><a href="#">학교 홈페이지</a></li>
              <li><a href="#">학사정보</a></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="well">
                <h3>요일체크</h3>
                <hr />
                <form role="form">
                  <label className="radio-inline" data-type="mon" >
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="월"/>월
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="화"/>화
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="수"/>수
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="목"/>목
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="금"/>금
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" onClick={ this.onButtonClick } value="all"/>
                    전체
                  </label>
                </form>
              </div>
              <div className="well">
                <h3>시간체크</h3>
                <hr />
                <form role="form">
                  <div className="1period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 1교시
                      </label>
                    </div>
                  </div>
                  <div className="2period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 2교시
                      </label>
                    </div>
                  </div>
                  <div className="3period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 3교시
                      </label>
                    </div>
                  </div>
                  <div className="4period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 4교시
                      </label>
                    </div>
                  </div>
                  <div className="5period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 5교시
                      </label>
                    </div>
                  </div>
                  <div className="6period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 6교시
                      </label>
                    </div>
                  </div>
                  <div className="7period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 7교시
                      </label>
                    </div>
                  </div>
                  <div className="8period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 8교시
                      </label>
                    </div>
                  </div>
                  <div className="9period">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> 9교시
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="well">
                <h3>미정이</h3>
                <hr />
                <form role="form">
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />월
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />화
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />수
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />목
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" />금
                  </label>
                </form>
              </div>
            </div>
            <div className="container">
              <h2>2016년 1학기 강의시간표</h2>
              <table style={{width: '75%'}} className="table table-striped">
                <thead>
                  <tr>
                    <th>학수번호</th>
                    <th>이수번호</th>
                    <th>과목명</th>
                    <th>교수명</th>
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
