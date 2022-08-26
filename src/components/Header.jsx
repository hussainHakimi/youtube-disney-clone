import styled from 'styled-components'
import React from 'react'

const Header = () => {
  return (
    <Nav>
      <Logo src="images/logo.svg" alt="logo in Navbar"/>
      <NavMenu>
        <a href='/home'>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href='/home'>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a href='/home'>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>watchlist</span>
        </a>
        <a href='/home'>
          <img src="/images/original-icon.svg" alt="" />
          <span>Originals</span>
        </a>
        <a href='/home'>
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>
        <a href='/home'>
          <img src="/images/series-icon.svg" alt="" />
          <span>series</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  )
}


const Nav = styled.nav`
position : fixed;
height : 70px;
background : #090b13;
width: 100%;
top : 0;
right : 0;
left : 0;
display : flex;
justify-content : space-between;
align-items : center;
padding : 0 36px;
// letter-spacing : 16px;
z-index : 4;


`


const Logo = styled.img`
width : 90px;
padding : 0
margin-top : 4px;
max-height : 70px;
display : inline-block;

`
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-bottom : 3px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 5px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -8px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color : rgba(0, 0, 0, 0.6);
  border : 1px solid #f9f9f9;
  padding : 8px 16px;
  text-transform : uppercase;
  border-radius : .3rem;
  letter-spacing : 1.5px;
  transition : all 0.2s ease 0s;

  &:hover{
    background-color : #f9f9f9;
    cursor : pointer;
    color : #000;
  }

`

export default Header