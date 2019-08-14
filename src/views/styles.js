import styled from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

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
  font-size: 18px;
  padding: 19px 32px;
  text-decoration: none;
  color: #fff;
  border: none;
  background-color: #8A05BE;
  min-width: max-content;
  cursor: pointer;
  outline: none;
  transition: background-color .2s;

  &:hover {
    background-color: #B94CE2;
  }

  &.outline {
    color: #8A05BE;
    border: none;
    background-color: #fff;

    &:hover {
      color: #B94CE2;
    }
  }
  
  &.block {
    width: 100%;
  }
`;