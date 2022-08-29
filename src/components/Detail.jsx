import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'


const Detail = (props) => {
  const {id} = useParams()
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection('movies').doc(id)
    .get()
    .then((doc) => {
      if(doc.exists){
        setDetailData(doc.data());
      }else{
        console.log('No Such Document in Firebase 💥')
      }
    })
    .catch((error) => {
      console.log("Error Getting Document : ", error)
    })
    
  }, [id])

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg}
        alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg}
        alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle> {detailData.subTitle}</SubTitle>
        <Description> {detailData.description}</Description>
      </ContentMeta>
    </Container>
  )
}


const Container = styled.div`
  position : relative;
  min-height : calc(100vh - 250px);
  overflow-x : hidden;
  display : block;
  top : 72px;
  padding : 0 calc(3.5vw + 5px);
`

const Background = styled.div`
  left : 0;
  opacity : 0.8;
  position : fixed;
  right : 0;
  top : 0;
  z-index : -1;
  object-fit : cover;


  img{
    width : 100vw;
    height : 100vh;

  @media (max-width: 768px) {
    width : initail;
  }

  }
`
const ImageTitle = styled.div`
  align-items : flex-end;
  display : flex;
  justify-content : flex-start;
  -webkit-box-pack : start;
  margin : 0 auto;
  height : 30vw;
  min-height : 170px;
  padding-bottom : 24px;
  width : 100%;

  img{
    max-width : 600px;
    min-width : 200px;
    width : 35vw;
  }
`
const ContentMeta = styled.div`
  max-width : 874px;
  
`
const Controls = styled.div`
  display : flex;
  align-items : center;
  flex-flow : row nowrap;
  margin : 24px 0px;
  min-height : 56px;
`
const Player = styled.button`
  font-size : 15px;
  text-align : center;
  margin : 0px 22px 0px 0px;
  padding : 12px 30px;
  border-radius : 5px;
  display: flex;
  align-items : center;
  font-weight : 700;
  justify-content : center;
  letter-spacing : 1px;
  text-transform : uppercase;
  background : rgb(249, 249, 249);
  border : none; 
  color : #000;

  img{
    width : 32px;
  }

  &:hover {
    background : rgb(198, 198, 198);
  }

  @media(max-width : 768px) {
    padding : 8px 12px;
    font-size : 12px;
    margin : 0px 10px 0px 0px;

    img{
      width : 25px;
    }
  }
`

const Trailer = styled(Player)`
  background : rgba(0,0,0, 0.7);
  color : #fff;
  border : 1px solid rgb(249, 249, 249);

  &:hover{
    background : rgba(0, 0, 0, 0.3);
  }
`

const AddList = styled.div`
  width : 60px;
  height : 60px;
  background : rgba(0, 0, 0, 0.6);
  border-radius : 50%;
  border : 2px solid #f9f9f9;
  cursor : pointer;
  display : flex;
  align-items : center;
  justify-content : center;

  span{
    background-color : rgb(249, 249, 249);
    display : inline-block;

    &:first-child {
      height : 2px;
      transform : translate(1px, 0px) rotate(0deg);
      width : 16px;
    }
    &:nth-child(2) {
      height : 16px;
      transform : translateX(-8px) rotate(0deg);
      width : 2px;
    }
  }


`

const GroupWatch = styled(AddList)`
  margin-left : 20px;
  img{
    width : 45px;
  }
`
const SubTitle = styled.div`
  color : rgb(249, 249, 249);
  font-size : 15px;
  min-height : 20px;

  @media (max-width: 768px) {
    font-size : 12px;

  }

`
const Description = styled.div `
  line-height : 1.4;
  font-size : 20px;
  padding : 16px 0px;
  color : rgb(249, 249, 249);

  @media (min-width: 768){
    font-size : 14px;
  }
`

export default Detail



















// import React from 'react'
// import styled from 'styled-components'


// const Detail = (props) => {
//   return (
//     <Container>
//       <Background>
//         <img src="https://i.pinimg.com/736x/8d/80/1f/8d801fcdf1e256020d055c92874cae16.jpg" alt="" />
//       </Background>
//       <ImageTitle>
//         <img src="https://www.rotoscopers.com/2015/03/06/the-differences-between-disney-and-pixar" alt="" />
//       </ImageTitle>
//       <ContentMeta>
//         <Controls>
//           <Player>
//             <img src="/images/play-icon-black.png" alt="" />
//             <span>Play</span>
//           </Player>
//           <Trailer>
//             <img src="/images/play-icon-white.png" alt="" />
//             <span>Trailer</span>
//           </Trailer>
//           <AddList>
//             <span></span>
//             <span></span>
//           </AddList>
//           <GroupWatch>
//             <div>
//               <img src="/images/group-icon.png" alt="" />
//             </div>
//           </GroupWatch>
//         </Controls>
//         <SubTitle>
//           subTitle
//         </SubTitle>
//         <Description>
//           Description
//         </Description>
//       </ContentMeta>
//     </Container>
//   )
// }


// const Container = styled.div`
//   position : relative;
//   min-height : calc(100vh - 250px);
//   overflow-x : hidden;
//   display : block;
//   top : 72px;
//   padding : 0 calc(3.5vw + 5px);
// `

// const Background = styled.div`
//   left : 0;
//   opacity : 0.8;
//   position : fixed;
//   right : 0;
//   top : 0;
//   z-index : -1;
//   object-fit : cover;


//   img{
//     width : 100vw;
//     height : 100vh;

//   @media (max-width: 768px) {
//     width : initail;
//   }

//   }
// `
// const ImageTitle = styled.div`
//   align-items : flex-end;
//   display : flex;
//   justify-content : flex-start;
//   -webkit-box-pack : start;
//   margin : 0 auto;
//   height : 30vw;
//   min-height : 170px;
//   padding-bottom : 24px;
//   width : 100%;

//   img{
//     max-width : 600px;
//     min-width : 200px;
//     width : 35vw;
//   }
// `
// const ContentMeta = styled.div`
//   max-width : 874px;
  
// `
// const Controls = styled.div`
//   display : flex;
//   align-items : center;
//   flex-flow : row nowrap;
//   margin : 24px 0px;
//   min-height : 56px;
// `
// const Player = styled.button`
//   font-size : 15px;
//   text-align : center;
//   margin : 0px 22px 0px 0px;
//   padding : 12px 30px;
//   border-radius : 5px;
//   display: flex;
//   align-items : center;
//   font-weight : 700;
//   justify-content : center;
//   letter-spacing : 1px;
//   text-transform : uppercase;
//   background : rgb(249, 249, 249);
//   border : none; 
//   color : #000;

//   img{
//     width : 32px;
//   }

//   &:hover {
//     background : rgb(198, 198, 198);
//   }

//   @media(max-width : 768px) {
//     padding : 8px 12px;
//     font-size : 12px;
//     margin : 0px 10px 0px 0px;

//     img{
//       width : 25px;
//     }
//   }
// `

// const Trailer = styled(Player)`
//   background : rgba(0,0,0, 0.7);
//   color : #fff;
//   border : 1px solid rgb(249, 249, 249);

//   &:hover{
//     background : rgba(0, 0, 0, 0.3);
//   }
// `

// const AddList = styled.div`
//   width : 60px;
//   height : 60px;
//   background : rgba(0, 0, 0, 0.6);
//   border-radius : 50%;
//   border : 2px solid #f9f9f9;
//   cursor : pointer;
//   display : flex;
//   align-items : center;
//   justify-content : center;

//   span{
//     background-color : rgb(249, 249, 249);
//     display : inline-block;

//     &:first-child {
//       height : 2px;
//       transform : translate(1px, 0px) rotate(0deg);
//       width : 16px;
//     }
//     &:nth-child(2) {
//       height : 16px;
//       transform : translateX(-8px) rotate(0deg);
//       width : 2px;
//     }
//   }


// `

// const GroupWatch = styled(AddList)`
//   margin-left : 20px;
//   img{
//     width : 45px;
//   }
// `
// const SubTitle = styled.div`
//   color : rgb(249, 249, 249);
//   font-size : 15px;
//   min-height : 20px;

//   @media (max-width: 768px) {
//     font-size : 12px;

//   }

// `
// const Description = styled.div `
//   line-height : 1.4;
//   font-size : 20px;
//   padding : 16px 0px;
//   color : rgb(249, 249, 249);

//   @media (min-width: 768){
//     font-size : 14px;
//   }
// `

// export default Detail