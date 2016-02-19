import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';

import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';

import SideNavBar from './components/SideNavBar';
import PeriodSelector from './components/PeriodSelector';
import WeekSelector from './components/WeekSelector';
import ClassTable from './components/ClassTable';


import './index.css';
injectTapEventPlugin();



class Index extends Component {

  constructor(props) {
    super(props);


    this.onPeriodChange = this.onPeriodChange.bind(this);

  }



  onPeriodChange(result) {
    console.log(result)
    this.setState({
      selectedTime: result,
    });
  }


  render() {
    return (
      <div className="Index">
        <AppBar
          title="평택대 강의계획서"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconClassNameLeft="false"
        />
        <SideNavBar />
        <div className="container">
          <div className="row">
            <WeekSelector />
            <PeriodSelector onChange={ this.onPeriodChange } />
            <ClassTable />
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
