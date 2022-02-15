import { QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Popover } from 'antd';
import { useState } from 'react';
import { LOGO_URL, SIGN_IN_URL, SIGN_UP_URL } from '../../../data/EndPoints';
import { headerHelpLinks } from '../../../data/HeaderHelpLinks';
import { settingsData } from '../../../data/SettingsData';
import {
  CollapsingIcon,
  HeaderButton,
  HeaderSearch,
  HelpLinksMenu,
  SettingsCollapse,
  SettingsMenu,
  SignUpButton,
} from '../styles';
import '../styles.css';

const { Header } = Layout;
const { Panel } = SettingsCollapse;

export const AppHeader = ({ siderWidth, collapsed, setCollapsed }) => {
  //hardcoding the default state
  const [selected, setSelected] = useState({ Theme: 'Dark', Odds: 'American' });

  //opening it in a new window as we are redirecting to smarkets website
  const redirect = (url) => {
    window.open(url);
  };

  const HelpContent = () => (
    <HelpLinksMenu selectable={false}>
      {headerHelpLinks.map(({ title, url }) => (
        <HelpLinksMenu.Item key={url} onClick={() => redirect(url)}>
          {title}
        </HelpLinksMenu.Item>
      ))}
    </HelpLinksMenu>
  );

  const SettingsContent = () => (
    <SettingsCollapse accordion expandIconPosition="right">
      {settingsData.map(({ title, values }, index) => (
        <Panel header={title} key={index} extra={[selected[title]]}>
          <SettingsMenu
            selectedKeys={[selected[title]]}
            onSelect={(value) =>
              setSelected({ ...selected, [title]: value.key })
            }
          >
            {values.map((value) => (
              <SettingsMenu.Item key={value}>{value}</SettingsMenu.Item>
            ))}
          </SettingsMenu>
        </Panel>
      ))}
    </SettingsCollapse>
  );

  return (
    <Header className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center" style={{ width: siderWidth - 24 }}>
          <CollapsingIcon onClick={() => setCollapsed(!collapsed)} />
          <img
            className="pl1"
            width={100}
            height={23.06}
            src={LOGO_URL}
            alt="site-logo"
          />
        </div>
        <HeaderSearch placeholder="Events, Markets, or Contracts" />
      </div>
      <div className="flex items-center">
        <Popover
          content={<HelpContent />}
          title="Popular Help Resources"
          trigger="click"
        >
          <HeaderButton className=" header-button-icon">
            <QuestionCircleOutlined />
          </HeaderButton>
        </Popover>
        <Popover content={<SettingsContent />} trigger="click">
          <HeaderButton className=" header-button-icon">
            <SettingOutlined />
          </HeaderButton>
        </Popover>
        <HeaderButton onClick={() => redirect(SIGN_IN_URL)}>
          log in
        </HeaderButton>
        <SignUpButton onClick={() => redirect(SIGN_UP_URL)}>
          create account
        </SignUpButton>
      </div>
    </Header>
  );
};
