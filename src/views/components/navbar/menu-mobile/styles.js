import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../../styles';

export const MenuMobileContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  background-color: #fff;
  height: calc(100vh - 120px);
  width: calc(100% - 64px);
  z-index: 10;
  padding: 32px;
  transition: transform 0.3s ease-out;
  transform: translateY(-110vh);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &.menu-visible {
    transform: translateY(0px);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  list-style: none;
`;

export const LinkItem = props => {
  const ChildLink = styled(NavLink)`
    padding: 15px 0px;
    font-size: 24px;
    cursor: pointer;
  `;

  return (
    <li>
      <ChildLink {...props} />
    </li>
  );
};