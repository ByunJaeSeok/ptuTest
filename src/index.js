import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';
import timeFilter from './timeFilter';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

import PeriodSelector from './components/PeriodSelector';
import './index.css';
injectTapEventPlugin();

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
        <AppBar
          title="평택대 강의계획서"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconClassNameLeft="false"
        />
      <div style={{ width: '300px' }}>
          <List subheader="시간표선택">
            <ListItem
              primaryText="전공"
              leftIcon={<ContentInbox />}
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="신학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={2}
                  primaryText="국어국문학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={3}
                  primaryText="음악학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={4}
                  primaryText="사회복지학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={5}
                  primaryText="경영학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={6}
                  primaryText="아동청소년복지학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={7}
                  primaryText="행정학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={8}
                  primaryText="시각디자인학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={9}
                  primaryText="도시및부동산개발학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={10}
                  primaryText="컴퓨터학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={11}
                  primaryText="정보통신학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={12}
                  primaryText="디지털응용정보학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={13}
                  primaryText="미국학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={14}
                  primaryText="중국학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={15}
                  primaryText="일본학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={16}
                  primaryText="재활복지학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={17}
                  primaryText="광고홍보학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={18}
                  primaryText="실용음악학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={19}
                  primaryText="방송연예학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={20}
                  primaryText="영상디자인학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={21}
                  primaryText="패션디자인및브랜딩학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={22}
                  primaryText="아동·청소년복지학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={23}
                  primaryText="무역물류학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={24}
                  primaryText="환경융합시스템학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={25}
                  primaryText="데이터정보학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={26}
                  primaryText="환경융합시스템학과"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={27}
                  primaryText="환황해권물류지식인융복합"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={28}
                  primaryText="창업융복합"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={29}
                  primaryText="초협업융복합"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={30}
                  primaryText="다문화복지융복합"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={31}
                  primaryText="글로벌리더스융복합"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={32}
                  primaryText="스토리텔링융복합"
                  leftIcon={<ContentSend />}
                />,
              ]}
            />
            <ListItem primaryText="교양"
              leftIcon={<ContentInbox />}
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="교양필수"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={2}
                  primaryText="교양선택"
                  leftIcon={<ContentSend />}
                />,
                <ListItem
                  key={3}
                  primaryText="PTU교양"
                  leftIcon={<ContentSend />}
                />,
              ]}
            />
          </List>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="well">
                <h3>요일선택</h3>
                <hr />

                  <div>
                      <RadioButtonGroup name="shipSpeed" defaultSelected="all">
                        <RadioButton
                          value="all"
                          label="전체"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                        <RadioButton
                          value="월"
                          label="월"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                        <RadioButton
                          value="화"
                          label="화"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                        <RadioButton
                          value="수"
                          label="수"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                        <RadioButton
                          value="목"
                          label="목"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                        <RadioButton
                          value="금"
                          label="금"
                          onClick={ this.setWeek }
                          style={{ float: "left", width: "5%" }}
                        />
                      </RadioButtonGroup>
                    </div>
              </div>
              <PeriodSelector onChange={ this.onPeriodChange } />
            </div>
            <div className="col-md-12">
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
