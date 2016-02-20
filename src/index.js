import 'babel-polyfill';
import _ from 'lodash';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import SideNavBar from './components/SideNavBar';
import PeriodSelector from './components/PeriodSelector';
import WeekSelector from './components/WeekSelector';
import ClassTable from './components/ClassTable';
import FullWidthSection from './components/FullWidthSection';
import { majorList, nonMajorList } from './constant';
import './index.css';

injectTapEventPlugin();

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTime: [],
      selectedWeek: 'all',
      selectedDepartment: 'theology',
    };
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.onWeekChange = this.onWeekChange.bind(this);
    this.onSidebarChange = this.onSidebarChange.bind(this);
  }

  onPeriodChange(value) {
    this.setState({
      selectedTime: value,
    });
  }

  onWeekChange(value) {
    this.setState({
      selectedWeek: value,
    });
  }

  onSidebarChange(value) {
    this.setState({
      selectedDepartment: value,
    });
  }

  getStyles() {
    return {
      appBar: {
        position: 'fixed',
        top: 0,
      },
      bodyWrapper: {
        paddingLeft: '310px',
      },
      body: {
        margin: '48px 72px',
      },
    };
  }

  render() {
    const selectedTime = this.state.selectedTime;
    const selectedWeek = this.state.selectedWeek;
    const selectedDepartment = this.state.selectedDepartment;

    const { bodyWrapper, body, appBar } = this.getStyles();
    let departmentTitle = majorList[selectedDepartment];
    if (_.isUndefined(departmentTitle)) {
      departmentTitle = nonMajorList[selectedDepartment];
    }
    return (
      <div className="Index">
        <AppBar
          style={appBar}
          title="평택대 강의계획서"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconClassNameLeft="false"
        />
        <SideNavBar
          selectedDepartment={selectedDepartment}
          onSidebarChange={this.onSidebarChange}
        />
        <FullWidthSection style={bodyWrapper}>
          <div style={body}>
            <h1>{departmentTitle}</h1>
            <br />
            <WeekSelector onChnage={ this.onWeekChange } />
            <br />
            <PeriodSelector onChange={ this.onPeriodChange } />
            <br />
            <ClassTable
              selectedDepartment={selectedDepartment}
              selectedWeek={selectedWeek}
              selectedTime={selectedTime}
            />
          </div>
        </FullWidthSection>
      </div>
    );
  }

}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
