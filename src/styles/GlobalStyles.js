import { Button } from 'antd';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)`
  background-color: #00b073 !important;
  border-radius: 2px;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px !important;

  :hover {
    background-color: rgba(0, 176, 115, 0.8) !important;
    color: #fff;
    border: 1px solid rgba(0, 176, 115, 0.8);
  }
`;
