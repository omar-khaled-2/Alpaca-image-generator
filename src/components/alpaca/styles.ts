import React from 'react'
import styled from 'styled-components'

interface ContainerProps{
    backgroundColor:string
}


export const Container = styled.div<ContainerProps>`
    background-color:${props => props.backgroundColor} ;
    aspect-ratio:1 ;
    flex:1;
    position:relative;
    max-width:500px ;
    margin:0 auto ;
`


const Image = styled.img`
    position: absolute;
    top:0 ;
    left:0 ;
    right:0 ;
    bottom: 0;
    width:100% ;
`



export const Neck = styled(Image)`
    z-index:1 ;
`



export const Eyes = styled(Image)`
    z-index:5;
`
export const Nose = styled(Image)`
    z-index:2 ;
`

export const Ears = styled(Image)`
    z-index:0 ;
`



export const Leg = styled(Image)`
    z-index:0 ;
`
export const Hair = styled(Image)`
    z-index:2 ;
    
`

export const Mouth = styled(Image)`
    z-index:2 ;
`


export const Accessories = styled(Image)`
    z-index:2 ;
`