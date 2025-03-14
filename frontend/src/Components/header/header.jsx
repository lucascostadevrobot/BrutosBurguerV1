import { Container, Button } from "../../Styles-Components/header/header";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Imagem01 from "../../assets/img/imagem01Slide.png";
import Imagem02 from "../../assets/img/imagem02Slide.png";
import Imagem03 from "../../assets/img/imagem03Slide.png";
import { SliderContainer } from '../../Styles-Components/SliderHeader/StyledSliderHeader.js';






const Header = () => {
    const [formaAtualBotao, setTextoBotao] = useState("Fazer um pedido");
    const mudarTextoBotao = () => {
        setTextoBotao("Você abriu  um pedido...");
    }



    return (
        <>

            <Container>
                <Carousel>
                    <Carousel.Item>
                        <SliderContainer src={Imagem01} alt="Imagem Lanche" className="d-block w-100">

                        </SliderContainer>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <SliderContainer src={Imagem02} alt="Imagem Lanche"  className="d-block w-100">

                        </SliderContainer>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <SliderContainer img src={Imagem03} alt="Imagem Lanche" className="d-block w-100">

                        </SliderContainer>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Button onClick={mudarTextoBotao}>{formaAtualBotao}</Button>
            </Container>
        </>


    );
}

export default Header;
