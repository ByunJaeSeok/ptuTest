import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
};

class PeriodSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      period1: false,
      period2: false,
    };

    this.setPeriod = this.setPeriod.bind(this);
    this.onChangeCombine = this.onChangeCombine.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.period1 !== prevState.period1) return this.onChangeCombine();
    if (this.state.period2 !== prevState.period2) return this.onChangeCombine();
  }

  onChangeCombine() {
    var result = this.getSelectedPeriods();
    this.props.onChange(result);
  }

  setPeriod(event) {
    switch (event.target.value) {
      case '1':
        this.setState({ period1: event.target.checked });
        break;
      case '2':
        this.setState({ period2: event.target.checked });
        break;
      default:
        this.setState({
          period1: event.target.checked,
          period2: event.target.checked,
        });
    }
  }

  getSelectedPeriods(value, isChecked) {
    var result = [];

    if (this.state.period1) result.push(1);
    if (this.state.period2) result.push(2);

    return result;
  }

  render() {
    const { period1, period2 } = this.state;

    return (
      <div className="well">
        <h3>시간선택</h3>
        <hr />
        <form role="form" ref="form">
          <div className="allPeriod">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="all"
                  checked={ period1 && period2 }
                />
                전체
              </label>
            </div>
          </div>
          <div className="period1">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="1"
                  checked={ period1 }
                />
                1교시
              </label>
            </div>
          </div>
          <div className="period2">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="2"
                  checked={ period2 }
                />
                2교시
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

PeriodSelector.propTypes = propTypes;

export default PeriodSelector;
