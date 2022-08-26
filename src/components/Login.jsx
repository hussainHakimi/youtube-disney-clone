import styled from "styled-components";
import React from 'react'

const Login = () => {
  return (
    <Contianer>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='CtaOne'/>
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='CtaTwo'/>

        </CTA>
        <BgImage/>
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

const BgImage = styled.div`
height : 100%;
background-position : top;
background-size : cover;
background-repeat : repeat;
background-image : url('/images/login-background.jpg');
position : absolute;
left : 0;
right : 0;
top : 0;
z-index : -1;

`

const CTA = styled.div`
max-width : 650px;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
transition-timing-function : easeout;
transition : opacity 0.2s;
width : 100%;

`

const CTALogoOne = styled.img`
margin-bottom : 12px;
max-width : 600px;
min-height : 1px;
display : block;
width : 100%;

`

const CTALogoTwo = styled.img`
margin-bottom : 12px;
max-width : 600px;
min-height : 1px;
display : block;
width : 100%;
vertical-align : bottom;

`

const SignUp = styled.a`
font-weight : bold;
color : #f9f9f9;
background-color : #0063e5;
margin-bottom : 12px;
width : 100%;
letter-spacing : 1.5px
font-size : 18px;
padding : 16.5px 0;
border : 1px solid transparent;
border-radius : .3rem;

&:hover {
  background-color : #0483ee;
}
`

const Description = styled.p`
font-size : 11px;
color : hsla(0, 0%, 95.3%, 1);
margin : 0 0 24px;
line-height : 1.5;
letter-spacing : 1.5px;
`


export default Login