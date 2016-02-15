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
      period3: false,
      period4: false,
      period5: false,
      period6: false,
      period7: false,
    };

    this.setPeriod = this.setPeriod.bind(this);
    this.onChangeCombine = this.onChangeCombine.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.period1 !== prevState.period1) return this.onChangeCombine();
    if (this.state.period2 !== prevState.period2) return this.onChangeCombine();
    if (this.state.period3 !== prevState.period3) return this.onChangeCombine();
    if (this.state.period4 !== prevState.period4) return this.onChangeCombine();
    if (this.state.period5 !== prevState.period5) return this.onChangeCombine();
    if (this.state.period6 !== prevState.period6) return this.onChangeCombine();
    if (this.state.period7 !== prevState.period7) return this.onChangeCombine();
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
      case '3':
        this.setState({ period3: event.target.checked });
        break;
      case '4':
        this.setState({ period4: event.target.checked });
        break;
      case '5':
        this.setState({ period5: event.target.checked });
        break;
      case '6':
        this.setState({ period6: event.target.checked });
        break;
      case '7':
        this.setState({ period7: event.target.checked });
        break;
      default:
        this.setState({
          period1: event.target.checked,
          period2: event.target.checked,
          period3: event.target.checked,
          period4: event.target.checked,
          period5: event.target.checked,
          period6: event.target.checked,
          period7: event.target.checked,
        });
    }
  }

  getSelectedPeriods(value, isChecked) {
    var result = [];

    if (this.state.period1) result.push(1);
    if (this.state.period2) result.push(2);
    if (this.state.period3) result.push(3);
    if (this.state.period4) result.push(4);
    if (this.state.period5) result.push(5);
    if (this.state.period6) result.push(6);
    if (this.state.period7) result.push(7);

    return result;
  }

  render() {
    const { period1, period2, period3, period4, period5, period6, period7 } = this.state;

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
                  checked={ period1 && period2 && period3 && period4 && period5 && period6 && period7 }
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
          <div className="period3">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="3"
                  checked={ period3 }
                />
              3교시
              </label>
            </div>
          </div>
          <div className="period4">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="4"
                  checked={ period4 }
                />
              4교시
              </label>
            </div>
          </div>
          <div className="period5">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="5"
                  checked={ period5 }
                />
              5교시
              </label>
            </div>
          </div>
          <div className="period6">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="6"
                  checked={ period6 }
                />
              6교시
              </label>
            </div>
          </div>
          <div className="period7">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck"
                  onChange={ this.setPeriod } value="7"
                  checked={ period7 }
                />
              7교시
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
