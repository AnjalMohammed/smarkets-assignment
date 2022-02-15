import { Button, Input, Layout, Menu, Collapse } from 'antd';
import styled from 'styled-components';
import { PrimaryButton } from '../../styles/GlobalStyles';
import { MenuOutlined } from '@ant-design/icons';

export const CollapsingIcon = styled(MenuOutlined)`
  color: #00b073;
`;

export const HeaderSearch = styled(Input.Search)`
  width: 13rem !important;

  .ant-input-group {
    display: flex;
  }

  .ant-input,
  .ant-btn {
    background: #2e2e2e !important;
    border: none !important;
    color: whitesmoke !important;
    font-size: 12px !important;
  }
`;

export const SignUpButton = styled(PrimaryButton)`
  margin-left: 24px;
`;

export const HeaderButton = styled(Button)`
  height: 100%;
  background: transparent !important;
  font-weight: 700;
  text-transform: uppercase;
  border: none !important;
  color: whitesmoke !important;
  font-size: 12px !important;

  :hover {
    background: #2e2e2e !important;
  }

  :focus {
    background: #2e2e2e !important;
    color: #00b073 !important;
  }

  .anticon {
    font-size: 150%;
  }
`;

export const ContentLayout = styled(Layout)`
  .ant-layout,
  .ant-layout-header {
    background-color: #0d0d0d;
  }
  .ant-layout-header {
    padding: 0 24px;
    height: 52px;
  }
  .ant-layout-sider-children {
    background-color: rgb(26, 26, 26);
  }

  .ant-layout-content {
    background-color: #000;
  }

  .ant-menu-item:hover {
    background: rgba(0, 176, 115, 0.8) !important;
    color: whitesmoke !important;
  }

  .ant-menu-item::after {
    border-right: none !important;
  }

  .ant-menu-vertical {
    border: none;
  }

  .ant-menu-item-selected {
    background: #414141 !important;
    color: whitesmoke !important;
  }
`;

export const HelpLinksMenu = styled(Menu)`
  .ant-menu-item::after {
    border-right: none !important;
  }

  .ant-menu-vertical {
    border: none;
  }

  .ant-menu-item:hover {
    background: #252525 !important;
    color: whitesmoke !important;
  }
`;

export const SettingsMenu = styled(Menu)`
  .ant-menu-vertical {
    border-right: 0 !importatn;
  }

  .ant-menu-item:hover {
    color: #00b073 !important;
  }

  .ant-menu-item-selected {
    color: #00b073 !important;
    background: transparent !important;
  }
`;

export const SettingsCollapse = styled(Collapse)`
  border: none !important;
  min-width: 200px;

  .ant-collapse-header:hover {
    background: #414141 !important;
  }
`;
