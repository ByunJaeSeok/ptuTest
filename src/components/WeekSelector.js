import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

class WeekSelector extends Component {

  constructor(props) {
    super(props);

  setWeek(event) {
    this.setState({
      selectedWeek: event.target.value,
    });
  }

  this.setWeek = this.setWeek.bind(this);
  }
}



render() {

return (
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
  )
}