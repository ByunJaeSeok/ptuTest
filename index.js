const Component = React.Component;


class Index extends Component {

  constructor(props) {
    super(props);
  }

  onButtonClick() {
    console.log('onButtonClick');
  }
  onButtonClick1() {
    console.log('onButtonClick1');
  }

  render() {
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
                  <label className="radio-inline" onClick={ this.onButtonClick }>
                    <input type="radio" name="optradio" />월
                  </label>
                  <label className="radio-inline" onClick={ this.onButtonClick1 }>
                    <input type="radio" name="optradio" />화
                  </label>
                  <label className="radio-inline" onClick={ this.onButtonClick }>
                    <input type="radio" name="optradio" />수
                  </label>
                  <label className="radio-inline" onClick={ this.onButtonClick }>
                    <input type="radio" name="optradio" />목
                  </label>
                  <label className="radio-inline" onClick={ this.onButtonClick }>
                    <input type="radio" name="optradio" />금
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
                  <tr>
                    <td>임시1</td>
                    <td>전필</td>
                    <td>컴퓨터구조</td>
                    <td>윤석규</td>
                    <td>수</td>
                    <td>2,3,4</td>
                  </tr>
                  <tr>
                    <td>임시2</td>
                    <td>전선</td>
                    <td>자료구조</td>
                    <td>문원식</td>
                    <td>목</td>
                    <td>6,7,8</td>
                  </tr>
                  <tr>
                    <td>임시3</td>
                    <td>전필</td>
                    <td>안드로이드</td>
                    <td>양단희</td>
                    <td>월</td>
                    <td>2,3,4</td>
                  </tr>
                  <tr>
                    <td>임시4</td>
                    <td>교선</td>
                    <td>c#</td>
                    <td>조영희</td>
                    <td>월</td>
                    <td>6,7,8</td>
                  </tr>
                  <tr>
                    <td>임시5</td>
                    <td>교선</td>
                    <td>엑셀</td>
                    <td>양단희</td>
                    <td>월</td>
                    <td>2,3</td>
                  </tr>
                  <tr>
                    <td>임시6</td>
                    <td>전선</td>
                    <td>운영체제</td>
                    <td>문원식</td>
                    <td>금</td>
                    <td>6,7,8</td>
                  </tr>
                  <tr>
                    <td>임시7</td>
                    <td>전필</td>
                    <td>안드로이드</td>
                    <td>양단희</td>
                    <td>월</td>
                    <td>2,3,4</td>
                  </tr>
                  <tr>
                    <td>임시8</td>
                    <td>교필</td>
                    <td>안드로이드</td>
                    <td>양단희</td>
                    <td>월</td>
                    <td>2,3,4</td>
                  </tr>
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
