import React from 'react'
import styled from 'styled-components'
import B from '../Button'
import DefaultTitle from '../Title'


export const Container = styled.div`
    flex:3;
 
    display:flex ;
    flex-direction:column;
    margin-left:50px;
    @media (max-width: 768px) {
        margin-left:0 ;
  }
`


export const Title = styled(DefaultTitle)`
    font-size:1.5em ;
    @media (max-width: 425px) {
        font-size:1rem ;
  }
`

export const Buttons = styled.div`
    display:flex ;
    flex-direction:row ;
    flex-wrap:wrap ;
`


export const Button = styled(B)`

        margin:5px 10px 5px 0px ;

`