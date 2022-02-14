import { MenuOutlined, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Collapse, Input, Layout, Menu, Popover } from 'antd';
import { useState } from 'react';
import { LOGO_URL, SIGN_IN_URL, SIGN_UP_URL } from '../../../data/EndPoints';
import { headerHelpLinks } from '../../../data/HeaderHelpLinks';
import { settingsData } from '../../../data/SettingsData';
import '../styles.css';

const { Header } = Layout;
const { Panel } = Collapse;

export const AppHeader = ({
    siderWidth,
    collapsed,
    setCollapsed
}) => {

    const [selected, setSelected] = useState({ Theme: 'Dark', Odds: 'American' });

    //opening it in a new window as we are redirecting to smarkets website
    const redirect = (url) => { window.open(url) }

    const HelpContent = () => <Menu selectable={false}>
        {
            headerHelpLinks.map(({ title, url }) =>
                <Menu.Item key={url} onClick={() => redirect(url)}>
                    {title}
                </Menu.Item>)
        }
    </Menu>

    const SettingsContent = () => <Collapse
        accordion
        expandIconPosition='right'
    >
        {
            settingsData.map(({ title, values }, index) => <Panel
                header={title}
                key={index}
                extra={[selected[title]]}>
                <Menu
                    selectedKeys={[selected[title]]}
                    onSelect={
                        (value) =>
                            setSelected({ ...selected, [title]: value.key })
                    }>
                    {
                        values.map((value) =>
                            <Menu.Item key={value}>
                                {value}
                            </Menu.Item>)
                    }
                </Menu>
            </Panel>
            )
        }
    </Collapse>

    return <Header className='flex items-center justify-between'>
        {/* the width is calculated here to provide uniformity for the layout */}
        <div className='flex items-center'>
            <div className='flex items-center' style={{ width: siderWidth - 24 }}>
                <MenuOutlined onClick={() => setCollapsed(!collapsed)} className='collapsing-icon' />
                <img className='pl1' width={100} height={23.06} src={LOGO_URL} alt="site-logo" />
            </div>
            <Input.Search className="searchbox" placeholder="Events, Markets, or Contracts" />
        </div>
        <div className='flex items-center'>
            <Popover
                content={<HelpContent />}
                title="Popular Help Resources" trigger="focus">
                <Button className='header-button header-button-icon'>
                    <QuestionCircleOutlined />
                </Button>
            </Popover>
            <Popover
                content={<SettingsContent />}
                trigger="click">
                <Button className='header-button header-button-icon'>
                    <SettingOutlined />
                </Button>
            </Popover>
            <Button onClick={() => redirect(SIGN_IN_URL)} className='header-button'>
                log in
            </Button>
            <Button onClick={() => redirect(SIGN_UP_URL)} className='header-button primary-button signup-button'>
                create account
            </Button>
        </div>

    </Header>
}
