import React, { PropTypes, Component } from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

const propTypes = {
};

const defaultProps = {
};


class SideNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{ width: '300px' }}>
        <List subheader="시간표선택">
          <ListItem
            primaryText="전공"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList
            nestedItems={[
              <ListItem
                key={1}
                primaryText="신학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={2}
                primaryText="국어국문학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                primaryText="음악학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={4}
                primaryText="사회복지학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={5}
                primaryText="경영학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={6}
                primaryText="아동청소년복지학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={7}
                primaryText="행정학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={8}
                primaryText="시각디자인학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={9}
                primaryText="도시및부동산개발학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={10}
                primaryText="컴퓨터학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={11}
                primaryText="정보통신학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={12}
                primaryText="디지털응용정보학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={13}
                primaryText="미국학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={14}
                primaryText="중국학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={15}
                primaryText="일본학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={16}
                primaryText="재활복지학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={17}
                primaryText="광고홍보학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={18}
                primaryText="실용음악학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={19}
                primaryText="방송연예학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={20}
                primaryText="영상디자인학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={21}
                primaryText="패션디자인및브랜딩학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={22}
                primaryText="아동·청소년복지학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={23}
                primaryText="무역물류학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={24}
                primaryText="환경융합시스템학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={25}
                primaryText="데이터정보학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={26}
                primaryText="환경융합시스템학과"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={27}
                primaryText="환황해권물류지식인융복합"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={28}
                primaryText="창업융복합"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={29}
                primaryText="초협업융복합"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={30}
                primaryText="다문화복지융복합"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={31}
                primaryText="글로벌리더스융복합"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={32}
                primaryText="스토리텔링융복합"
                leftIcon={<ContentSend />}
              />,
            ]}
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
        </List>
      </div>
    );
  }

}

SideNavBar.propTypes = propTypes;
SideNavBar.defaultProps = defaultProps;


export default SideNavBar;
