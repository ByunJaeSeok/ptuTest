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
    };

    this.handleUpdateSelectedIndex = this.handleUpdateSelectedIndex.bind(this);
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

  handleUpdateSelectedIndex(element, index) {
    this.setState({
      selectedDepartment: index,
    });

    if (this.props.onSidebarChange) {
      this.props.onSidebarChange(index);
    }
  }

  render() {
    const styles = this.getStyles();

    return (
      <LeftNav
        style={{
          zIndex: 1,
          width: '310px',
        }}
        docked
        open
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
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList
            nestedItems={[
              <ListItem
                key={1}
                primaryText="교양필수"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={2}
                primaryText="교양선택"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                primaryText="PTU교양"
                leftIcon={<ContentSend />}
              />,
            ]}
          />
        </SelectableList>
      </LeftNav>
    );
  }

}

SideNavBar.propTypes = propTypes;
SideNavBar.defaultProps = defaultProps;


export default SideNavBar;
