import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
};

const defaultProps = {
};


class PeriodSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="well">
        <h3>시간선택</h3>
        <hr />
        <form role="form">
          <div className="allPeriod">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="all"/> 전체
              </label>
            </div>
          </div>
          <div className="1period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="1"/> 1교시
              </label>
            </div>
          </div>
          <div className="2period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="2"/> 2교시
              </label>
            </div>
          </div>
          <div className="3period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="3"/> 3교시
              </label>
            </div>
          </div>
          <div className="4period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="4"/> 4교시
              </label>
            </div>
          </div>
          <div className="5period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="5"/> 5교시
              </label>
            </div>
          </div>
          <div className="6period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="6"/> 6교시
              </label>
            </div>
          </div>
          <div className="7period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="7"/> 7교시
              </label>
            </div>
          </div>
          <div className="8period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="8"/> 8교시
              </label>
            </div>
          </div>
          <div className="9period">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="optcheck" onClick={ this.setPeriod } value="9"/> 9교시
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

PeriodSelector.propTypes = propTypes;
PeriodSelector.defaultProps = defaultProps;


export default PeriodSelector;
