import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../styles';

export const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-left: 32px;
  background-color: #FFF;
  width: calc(100% - 32px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  z-index: 10;

  @media (max-width: 767px) {
    padding-right: 16px;
    width: calc(100% - 48px);
  }

  @media (max-width: 921px) {
    height: 64px;
  }
`;

export const NubankIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const LinksContainer = styled.div`
  padding: 0px 16px;
  overflow-x: auto;
  flex-grow: 1;
  
  @media (max-width: 767px) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  padding: 0px;
  list-style: none;
  margin: 0px;
`;

export const LinkItem = props => {
  const ChildLink = styled(NavLink)`
    padding: 19px 12px;
    font-size: 18px;
    font-weight: 400;
    flex-shrink: 0;
  `;

  return (
    <li>
      <ChildLink {...props} />
    </li>
  );
};

export const RightLinks = styled.div`
  display: flex;
  height: 100%;
  flex-shrink: 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    display: none;
  }

  &:before {
    content: '';
    box-shadow: #fff -3px -5px 20px 14px;
    position: relative;
    height: 60%;
  }
`;

export const ToggleMenu = styled.button`
  display: none;
  background-color: #FFF;
  border: none;
  outline: none;
  cursor: pointer;
  width: 56px;
  height: 56px; 
  border-radius: 50%;
  padding: 0px;

  &:hover {
    background-color: #F9F2FC;
  }

  @media (max-width: 767px) {
    display: inline-block;
    justify-self: flex-end;
  }
`;