import React, { Component, Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { List } from 'antd';
import router from 'umi/router';
// import { getTimeDistance } from '@/utils/utils';

const passwordStrength = {
  strong: (
    <font className="strong">
      <FormattedMessage id="app.settings.security.strong" defaultMessage="Strong" />
    </font>
  ),
  medium: (
    <font className="medium">
      <FormattedMessage id="app.settings.security.medium" defaultMessage="Medium" />
    </font>
  ),
  weak: (
    <font className="weak">
      <FormattedMessage id="app.settings.security.weak" defaultMessage="Weak" />
      Weak
    </font>
  ),
};

class SecurityView extends Component {
  linkToEditPwd = () => {
    router.push('/EditPassword');
  };

  getData = () => [
    {
      title: formatMessage({ id: 'app.settings.security.password' }, {}),
      // description: (
      //   <Fragment>
      //     {formatMessage({ id: 'app.settings.security.password-description' })}：
      //     {passwordStrength.strong}
      //   </Fragment>
      // ),
      actions: [
        <a onClick={this.linkToEditPwd}>
          <FormattedMessage id="app.settings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    // {
    //   title: formatMessage({ id: 'app.settings.security.phone' }, {}),
    //   description: `${formatMessage(
    //     { id: 'app.settings.security.phone-description' },
    //     {}
    //   )}：138****8293`,
    //   actions: [
    //     <a href='/EditPassword'>
    //       <FormattedMessage id="app.settings.security.modify" defaultMessage="Modify" />
    //     </a>,
    //   ],
    // },
    // {
    //   title: formatMessage({ id: 'app.settings.security.email' }, {}),
    //   description: `${formatMessage(
    //     { id: 'app.settings.security.email-description' },
    //     {}
    //   )}：ant***sign.com`,
    //   actions: [
    //     <a href='/EditPassword'>
    //       <FormattedMessage id="app.settings.security.modify" defaultMessage="Modify" />
    //     </a>,
    //   ],
    // },
  ];

  render() {
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default SecurityView;