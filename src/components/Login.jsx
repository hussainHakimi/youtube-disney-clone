import styled from "styled-components";
import React from 'react'

const Login = () => {
  return (
    <Contianer>
      <Content>
        Content
      </Content>
    </Contianer>
    // <div>
    //   <h1>Login</h1>
    // </div>
  )
}

const Contianer = styled.section`
overflow : hidden;
display : flex;
flex-direction : column;
height : 100vh;
text-align : center;
`

const Content = styled.div`
margin-bottom : 10vw;
width : 100%;
position : relative;
min-height : 100vh;
box-sizing : border-box;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
height : 100%;
padding : 80px 40px
`


export default Login