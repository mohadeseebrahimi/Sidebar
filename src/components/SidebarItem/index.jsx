import React from 'react'
import { Container } from './styles'
import { FaBeer } from 'react-icons/fa';

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem