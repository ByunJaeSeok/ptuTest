import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import Select from 'react-select';

const propTypes = {
  onChange: PropTypes.func,
};

const defaultProps = {
};

const periodList = [
  { value: 1, label: '1교시' },
  { value: 2, label: '2교시' },
  { value: 3, label: '3교시' },
  { value: 4, label: '4교시' },
  { value: 5, label: '5교시' },
  { value: 6, label: '6교시' },
  { value: 7, label: '7교시' },
  { value: 8, label: '8교시' },
  { value: 9, label: '9교시' },
  { value: 10, label: '10교시' },
  { value: 11, label: '11교시' },
];

class PeriodSelector extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: [],
    };

    this.onPeriodSelector = this.onPeriodSelector.bind(this);
  }

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  onPeriodSelector(value) {
    const newValue = (
      _.isEmpty(value) ? [] : _.map(value.split(','), _.toNumber)
    );
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  render() {
    return (
      <div>
        <h3>시간선택</h3>
        <hr />
        <Select
          multi
          name="period"
          value={this.state.value}
          options={periodList}
          onChange={this.onPeriodSelector}
        />
        <br/>
      </div>
    );
  }

}


PeriodSelector.propTypes = propTypes;
PeriodSelector.defaultProps = defaultProps;

export default PeriodSelector;
