import styled from 'styled-components'
import React from 'react'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'
import { useEffect } from 'react' 
import { async } from '@firebase/util'

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // const userEmail = useSelector(selectUserEmail);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if(user){
  //       setUser(user);
  //       history.push('/home')
  //     }
  //   })
  // }, [username])

  const handleAuth = () => {
    if(!username){
    auth.signInWithPopup(provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      alert(error.message)
    })
    // alert('Hello')
  } else if(username){
    auth.signOut().then(() => {
      dispatch(setSignOutState())
      history.push('/')
    }).catch((err) => alert(err.message))
  }
}

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name : user.displayName,
      email : user.email,
      photo : user.photoURL
    }))
  }
  return (
    <Nav>
      <Logo src="images/logo.svg" alt="logo in Navbar"/>
      {/* {!username ? 
        <Login onClick={handleAuth}>Login </Login>
          :
          <> */}
      
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
      <SignOut>
        <UserImg src={userPhoto} alt={username}/>
        <DropDown>
          <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
      </SignOut>
      {/* </>
      } */}
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

const UserImg = styled.img`
  height : 100%;
  
`

const DropDown = styled.div`
  poristion : absolute;
  top : 48px;
  right : 0;
  background :rgb(19, 19, 19);
  border : 1px solid rgba(151, 151, 151, 0.3);
  padding : 10px;
  border-radius : 4px;
  width : 100px;
  opacity : 0;

`
const SignOut = styled.div`
  position : relative;
  height : 48px;
  width : 48px;
  display : flex;
  cursor : pointer;
  align-items : center;
  justify-content : center;

  ${UserImg}{
    border-radius : 50%;
    width : 100%;
    height : 100%;
  }

  &:hover{
    ${DropDown}{
      opacity : 1;
      transition-duration : 1s;
    }
  }
`



export default Header