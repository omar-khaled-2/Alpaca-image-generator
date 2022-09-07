import React, { useState } from 'react'
import Alpaca, { alpacaAssets } from '../../alpaca'

import { Button, Buttons, Container, Title } from './styles'


interface ControlPanelProps{
    alpaca:Alpaca;
    onChangeAlpaca:(alpaca:Alpaca) => void
}

const ControlPanel:React.FC<ControlPanelProps> = ({alpaca,onChangeAlpaca}) => {
    const [focus,setFocus] = useState<keyof Alpaca>("hair")
    const options = Object.keys(alpacaAssets) as (keyof Alpaca)[]
  return (
    <Container>
        <Title>
            accessorize the alpaca's
        </Title>
        <Buttons>
            {
                options.map((option) => <Button key={option} isActive={focus === option} onClick={() => setFocus(option)}>
                    {option}
                </Button>)
            }
        </Buttons>
        <Title>
            {focus}
        </Title>
        <Buttons>
            {
                Object.keys(alpacaAssets[focus]).map((option) => <Button key={option} isActive={alpaca[focus] === option} onClick={() => onChangeAlpaca({
                    ...alpaca,
                    [focus]:option
                })}>
                    {option}
                </Button>)
            }
        </Buttons>
    </Container>
  )
}

export default ControlPanel