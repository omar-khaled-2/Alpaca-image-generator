import React, { RefObject } from 'react'

import AlpacaType, { alpacaAssets } from '../../alpaca'
import { Accessories, Container, Ears, Eyes, Hair, Leg, Mouth, Neck, Nose } from './styles'


interface AlpacaProps {
  
  alpaca:AlpacaType;

}



const Alpaca:React.FC<AlpacaProps> = ({alpaca}) => {
  

  return (
    <Container backgroundColor={alpacaAssets.background[alpaca.background]} id="alpaca">
      <Neck  src={alpacaAssets.neck[alpaca.neck]} />
      <Eyes  src={alpacaAssets.eyes[alpaca.eyes]} />
      <Nose  src={alpacaAssets.nose[alpaca.nose]} />
      <Ears  src={alpacaAssets.ears[alpaca.ears]}/>
      <Hair  src={alpacaAssets.hair[alpaca.hair]}/>
      <Mouth  src={alpacaAssets.mouth[alpaca.mouth]}/>
      <Leg  src={alpacaAssets.leg[alpaca.leg]}/>
      <Accessories src={alpacaAssets.accessories[alpaca.accessories]} />
    </Container>
  )
}

export default Alpaca