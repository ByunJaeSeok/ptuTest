import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import zIndex from 'material-ui/lib/styles/zIndex';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import {
  Colors,
  Spacing,
  Typography,
} from 'material-ui/lib/styles';

import { majorList, nonMajorList } from '../constant';
const SelectableList = SelectableContainerEnhance(List);

const propTypes = {
  onSidebarChange: PropTypes.func,
  selectedDepartment: PropTypes.string,
};

const defaultProps = {
};


class SideNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDepartment: props.selectedDepartment,
      open: false,
    };

    this.handleUpdateSelectedIndex = this.handleUpdateSelectedIndex.bind(this);
    this.toggleLeftNav = this.toggleLeftNav.bind(this);
    this.setOpen = this.setOpen.bind(this);
  }

  getStyles() {
    return {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: Typography.textFullWhite,
        lineHeight: `${Spacing.desktopKeylineIncrement}px`,
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.cyan500,
        paddingLeft: Spacing.desktopGutter,
        marginBottom: 8,
      },
    };
  }

  setOpen(open) {
    this.setState({ open });
  }

  handleUpdateSelectedIndex(element, index) {
    this.setState({
      selectedDepartment: index,
      open: false,
    });

    if (this.props.onSidebarChange) {
      this.props.onSidebarChange(index);
    }
  }

  toggleLeftNav() {
    this.setOpen(!this.state.open);
  }

  render() {
    const { open } = this.state;
    const styles = this.getStyles();

    return (
      <LeftNav
        docked={false}
        width={open ? 310 : 0}
        open={open}
        onRequestChange={this.setOpen}
        containerStyle={{ zIndex: zIndex.leftNav - 100 }}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          평택대학교 수강신청
        </div>
        <SelectableList
          valueLink={{
            value: this.state.selectedItem,
            requestChange: this.handleUpdateSelectedIndex,
          }}
        >
          <ListItem
            value=""
            primaryText="전공"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList
            nestedItems={
              _.map(majorList, (korean, value) => {
                return (
                  <ListItem
                    value={value}
                    primaryText={korean}
                    leftIcon={<ContentSend />}
                  />
                );
              })
            }
          />
          <ListItem primaryText="교양"
            value=""
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList
            nestedItems={
              _.map(nonMajorList, (korean, value) => {
                return (
                  <ListItem
                    value={value}
                    primaryText={korean}
                    leftIcon={<ContentSend />}
                  />
                );
              })
            }
          />
        </SelectableList>
      </LeftNav>
    );
  }

}

SideNavBar.propTypes = propTypes;
SideNavBar.defaultProps = defaultProps;


export default SideNavBar;
