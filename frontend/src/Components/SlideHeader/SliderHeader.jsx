import {SliderContainer} from '../../Styles-Components/SliderHeader/StyledSliderHeader.js';
import Imagem01 from '../../assets/img/imagem01Slide.png'
import Imagem02 from '../../assets/img/imagem02Slide.png'
import Imagem03 from '../../assets/img/imagem03Slide.png'
import {useState } from 'react';


const ComponentSliderHeader = () => {
    const [estadoImagens, setEstadoImagens] = useState();

    return (
   
        <SliderContainer src={Imagem02}>
           
        </SliderContainer>


    )
}

export default ComponentSliderHeader;