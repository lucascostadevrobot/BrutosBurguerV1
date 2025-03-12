import { Container, Button, FrasePrincipalHome } from "../../Styles-Components/header/header";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ComponentSliderHeader from "../SlideHeader/SliderHeader";
import Imagem01 from '../../assets/img/imagem01Slide.png'




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
                        <ComponentSliderHeader />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ComponentSliderHeader/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ComponentSliderHeader  />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Button onClick={mudarTextoBotao}>{formaAtualBotao}</Button>
            </Container>
        </>


    );
}

export default Header;
