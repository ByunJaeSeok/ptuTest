import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import SideNavBar from './components/SideNavBar';
import PeriodSelector from './components/PeriodSelector';
import WeekSelector from './components/WeekSelector';
import ClassTable from './components/ClassTable';
import FullWidthSection from './components/FullWidthSection';
import './index.css';

injectTapEventPlugin();

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTime: [],
      selectedWeek: 'all',
    };
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.onWeekChange = this.onWeekChange.bind(this);
  }

  onPeriodChange(result) {
    this.setState({
      selectedTime: result,
    });
  }

  onWeekChange(result) {
    this.setState({
      selectedWeek: result,
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


    const { bodyWrapper, body, appBar } = this.getStyles();

    return (
      <div className="Index">
        <AppBar
          style={appBar}
          title="평택대 강의계획서"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconClassNameLeft="false"
        />
        <SideNavBar />
        <FullWidthSection style={bodyWrapper}>
          <div style={body}>
            <h1>컴퓨터학과</h1>
            <br />
            <WeekSelector onChnage={ this.onWeekChange } />
            <br />
            <PeriodSelector onChange={ this.onPeriodChange } />
            <br />
            <ClassTable
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
