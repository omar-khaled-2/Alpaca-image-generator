import React, { useRef, useState } from 'react';


import ControlPanel from './components/controlpanel/ControlPanel';

import Button from './components/Button';
import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';
import AlpacaComponent from './components/alpaca/Alpaca';
import Alpaca, { alpacaAssets, getRandomAlpaca } from './alpaca';
import { Buttons, Container, Left, Row, Title } from './App.styles';





function App() {

  const imageRef = useRef<HTMLDivElement>(null);


  const [alpaca,setAlpaca] = useState<Alpaca>(getRandomAlpaca())

  



  const handleDownloadAlpaca = async() => {

    
    const blob = await domtoimage.toBlob(document.getElementById("alpaca")!!)
    fileSaver.saveAs(blob,"alpaca.png")

  }


  
  return (
    <Container>

      <Title>alpaca generator</Title>
        <Row>
          <Left>
            <AlpacaComponent alpaca={alpaca}  />
            <Buttons>
              <Button onClick={() => setAlpaca(getRandomAlpaca)}>
                Random
              </Button>
              <Button onClick={handleDownloadAlpaca}>
              download
            </Button>
            </Buttons>
          </Left>



          <ControlPanel alpaca={alpaca} onChangeAlpaca={setAlpaca}/>
        </Row>
   


    </Container>
  );
}

export default App;
