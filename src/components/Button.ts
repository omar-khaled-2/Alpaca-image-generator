import React from 'react'
import styled from 'styled-components'

interface ButtonProps{
    isActive?:boolean;

}


const Button = styled.button<ButtonProps>`

    padding:0 20px ;
    font-weight:bold;
    font-size:16px ;
    border-radius:25px ;
    height:40px ;
    
    color: ${props => props.isActive ? props.theme.colors.onPrimary : props.theme.colors.primary};
    background-color:${props => props.isActive ? props.theme.colors.primary : "transparent"} ;
    border: 2px solid ${props => props.theme.colors.primary};
    text-transform:uppercase ;
    cursor:pointer ;
    ::active{
        box-shadow:0 ;
    }
    @media (max-width: 768px) {
    font-size:12px ;
  }
`

export default Button