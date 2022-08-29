import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOriginal } from '../features/movie/movieSlice'

const Originals = (prpps) => {
  const movies = useSelector(selectOriginal)
  return (
    <Container>
    <h3>Originals</h3>
    <Content>
      {
      movies && movies.map((movie, key) => (
        <Wrap key={key}>
            {movie.id}
            <Link to={'/detail/' + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
        </Wrap>
      ))
    }
    </Content>
  </Container>
  )
}

const Container = styled.div`
  padding : 0 0 26px;

`

const Content = styled.div`
  display : grid;
  grid-gap : 25px;
  gap : 25px;
  grid-template-columns : repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns : repeat(2, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  padding-top : 56.52%;
  border-radius : 10px;
  box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;   
  border : 3px solid rgba(249, 249, 249, 0.1);
  cursor : pointer;
  overflow : hidden;
  position : relative;
  top : 0;
  transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;




  img{
    width : 100%;
    inset : 0px;
    position : absolute;
    height : 100%;
    display : block;
    object-fit : cover;
    opacity : 1;
    transition : all 250ms ease-in-out 0s;
    z-index : 1;
    top : 0;
  }

  &:hover {
    transform : scale(1.05);
    border-color : #fff;
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;   

  }

`

export default Originals