import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { AppRoutes } from '../AppRoutes';
import { AppHeader } from './Components/AppHeader';
import { GlobalLoader } from '../GlobalLoader';

import './styles.css';
import { leftnavLinks } from '../../data/LeftnavLinks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEventContext } from '../../contexts/EventContext';
import { ContentLayout } from './styles';

const { Content, Sider } = Layout;
const siderWidth = 240;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setPopularEvents, setEventDetails } = useEventContext();
  const navigate = useNavigate();
  const location = useLocation();

  const getLeftNavSelection = () => [
    leftnavLinks.find((nav) => location.pathname.includes(nav.url))?.url ||
      '/football',
  ];
  const handleSelect = (value) => {
    setPopularEvents([]);
    setEventDetails([]);
    navigate(`${value.key}/events`);
  };

  return (
    <GlobalLoader>
      <Layout className="full-height">
        <AppHeader
          siderWidth={siderWidth}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <ContentLayout>
          {!collapsed && (
            <Sider width={siderWidth}>
              <Menu
                mode="inline"
                selectedKeys={getLeftNavSelection()}
                style={{ height: '100%', borderRight: 0 }}
                onSelect={handleSelect}
              >
                {leftnavLinks
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map(({ url, label }) => (
                    <Menu.Item key={url}>{label}</Menu.Item>
                  ))}
              </Menu>
            </Sider>
          )}

          <Layout>
            <Content className="p2">
              <AppRoutes />
            </Content>
          </Layout>
        </ContentLayout>
      </Layout>
    </GlobalLoader>
  );
};
