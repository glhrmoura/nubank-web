import React from 'react'
import styled from 'styled-components'
import { NavLink } from '@/theme/global-styles'

export const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  padding-left: 32px;
  background-color: #FFF;
  box-shadow: rgba(17, 17, 17, 0.1) 0px 1px 1px;
  z-index: 100;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    padding-right: 16px;
  }
`

export const NubankIcon = styled.img`
  width: 45px;
  height: 45px;
`

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
`

export const LinkList = styled.ul`
  display: flex;
  padding: 0px;
  list-style: none;
  margin: 0px;
`

interface LinkItemProps {
  to: string
  children: React.ReactNode
}

export const LinkItem: React.FC<LinkItemProps> = (props) => {
  const ChildLink = styled(NavLink)`
    padding: 19px 12px;
    font-size: 16px;
    font-weight: 500;
    flex-shrink: 0;
    color: #111111;
  `

  return (
    <li>
      <ChildLink {...props} />
    </li>
  )
}

export const RightLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  padding-right: 32px;

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
`

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
` 