import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Catagory from './components/Catagory'
import Search from './components/Search'
import Pages from './pages/Pages'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Delicious</Logo>
      </Nav>
        <Search />
        <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  )
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg{
    font-size: 2rem;
  }
`
export default App
