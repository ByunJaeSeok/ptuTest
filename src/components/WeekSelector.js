import React, { PropTypes, Component } from 'react';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

const propTypes = {
  onChnage: PropTypes.func,
};

const defaultProps = {
};


class WeekSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: 'all',
    };
    this.setWeek = this.setWeek.bind(this);
  }

  setWeek(event, index, value) {
    this.setState({
      selectedWeek: value,
    });

    if (this.props.onChnage) {
      this.props.onChnage(value);
    }
  }

  render() {
    return (
      <div>
        <h3>요일선택</h3>
        <hr />
        <SelectField
          fullWidth
          value={this.state.selectedWeek}
          onChange={this.setWeek}
        >
          <MenuItem value="all" primaryText="전체"/>
          <MenuItem value="월" primaryText="월"/>
          <MenuItem value="화" primaryText="화"/>
          <MenuItem value="수" primaryText="수"/>
          <MenuItem value="목" primaryText="목"/>
          <MenuItem value="금" primaryText="금"/>
        </SelectField>
      </div>
    );
  }

}

WeekSelector.propTypes = propTypes;
WeekSelector.defaultProps = defaultProps;


export default WeekSelector;
