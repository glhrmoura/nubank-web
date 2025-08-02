import React from 'react'
import styled from 'styled-components'
import { NavLink } from '@/theme/global-styles'

export const MenuMobileContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fff;
  height: 100%;
  width: 100%;
  z-index: 10;
  padding: 32px;
  transition: transform 0.3s ease-out;
  transform: translateY(-110%);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &.menu-visible {
    transform: translateY(56px);
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 32px;
`

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  list-style: none;
`

interface LinkItemProps {
  to: string
  children: React.ReactNode
}

export const LinkItem: React.FC<LinkItemProps> = (props) => {
  const ChildLink = styled(NavLink)`
    padding: 15px 0px;
    font-size: 24px;
    cursor: pointer;
  `

  return (
    <li>
      <ChildLink {...props} />
    </li>
  )
} 