import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: blue;
  }
`;

export const HeaderStyle = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const AuthNav = styled.div`
  display: flex;
  gap: 10px;
`;
