import styled from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

export const NubankInnerLayout = styled.main`
  margin-top: 56px;

  @media (min-width: 1024px) {
    margin-top: 80px;
  }
`;

export const BorderLink = styled(RouterLink)`
  position: relative;
  margin: 0px;
  text-decoration: none;
  color: #8A05BE;
  text-decoration: none;
  background-image:
    linear-gradient(120deg, rgb(138, 5, 190) 0%, rgb(138, 5, 190) 100%), 
    linear-gradient(120deg, rgb(204, 204, 204) 0%, rgb(204, 204, 204) 100%);
  background-size: 0px 1px, 100% 1px;
  background-repeat: no-repeat;
  background-position: 0px 100%, 100% 100%;
  transition: background-size 0.2s ease-in-out 0s;

  &:hover {
    background-size: 100% 1px, 100% 1px;
  }
`;

export const NavLink = styled(RouterNavLink)`
  display: inline-block;
  width: max-content;
  color: #979797;
  text-decoration: none;
  
  &.active {
    color: #9216C2;
  }
  
  &:hover {
    color: #B35DD5;
  }

  &:focus {
    outline: none;
    color: #9216C2;
  }
`;

export const NubankButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  gap: 6px;
  padding: 12px 18px;
  text-decoration: none;
  color: #fff;
  border: none;
  background-color: #8A05BE;
  min-width: max-content;
  cursor: pointer;
  outline: none;
  transition: background-color .2s;
  border-radius: 6.25rem;

  &.outline {
    color: #8A05BE;
    border: none;
    background-color: #fff;
  }
  
  &.block {
    width: 100%;
  }
`;

export const FloatButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  background-color: #FFFFFF;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
`;