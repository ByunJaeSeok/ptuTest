import 'babel-polyfill';
import 'fixed-data-table/dist/fixed-data-table.css';
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
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    const win = window;
    if (win.addEventListener) {
      win.addEventListener('resize', this.onResize, false);
    } else if (win.attachEvent) {
      win.attachEvent('onresize', this.onResize);
    } else {
      win.onresize = this.onResize;
    }
  }

  onResize() {
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(this.onWindowResize, 16);
  }

  onWindowResize() {
    const win = window;

    const widthOffset = win.innerWidth < 680 ? 0 : 108;
    this.setState({
      tableWidth: win.innerWidth - widthOffset,
      tableHeight: win.innerHeight - 200,
    });
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
      body: {
        margin: '48px 20px',
      },
    };
  }


  // <SideNavBar
  //   selectedDepartment={selectedDepartment}
  //   onSidebarChange={this.onSidebarChange}
  // />
  render() {
    const {
      selectedTime,
      selectedWeek,
      selectedDepartment,
      tableWidth,
      tableHeight,
    } = this.state;

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
              tableWidth={tableWidth}
              tableHeight={tableHeight}
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
