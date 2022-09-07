import styled from "styled-components";
import DefaultTitle from "./components/Title";

export const Container  = styled.div`
    width:90%;
    max-width:1200px ;
    height:100%;
    margin:0 auto ;
`


export const Buttons = styled.div`
    display:flex ;
    flex-direction:row ;
    justify-content:space-around ;
    margin-top:20px ;

`

export const Title = styled(DefaultTitle)`
    font-size:4rem ;

    @media (max-width: 768px) {
        font-size:2rem ;
  }
  @media (max-width: 425px) {
        font-size:1.5rem ;
  }
`

export const Row = styled.div`
    display:flex ;
    flex-direction:row ;
    @media (max-width: 768px) {
        flex-direction:column ;
  }
`

export const Left = styled.div`
    flex:2
`