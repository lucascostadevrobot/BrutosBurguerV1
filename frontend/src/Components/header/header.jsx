import { Container, Button } from "../header/header.js";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Imagem01 from "../../assets/img/imagem01Slide.png";
import Imagem02 from "../../assets/img/imagem02Slide.png";
import Imagem03 from "../../assets/img/imagem03Slide.png";
import { SliderContainer } from './StyledSliderHeader.js';
import { Dialog } from 'primereact/dialog';


const Header = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');

    const [carregarCardapio, setCarregarCardapio] = useState("Fazer um pedido");
    const [carregamentoCardapio, setCarregamentoCardapio] = useState(null);


    const isCarregarCardapio = () => {
        setCarregarCardapio("Cardápio carregado....");
        setCarregamentoCardapio(true);
        setPosition(position);
    }

    const botoesInferioresDialog = (
        <div>
            <Button label="Ok!" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );


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
                        <SliderContainer src={Imagem02} alt="Imagem Lanche" className="d-block w-100">

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

                {carregamentoCardapio ? (
                    <span></span>
                ) : (
                    <Button onClick={isCarregarCardapio}>{carregarCardapio}</Button>
                )}

            </Container>


            {!carregamentoCardapio ? (
                <Dialog header="Opps!!" visible={visible} position={position} style={{ width: '50vw' }}
                    onHide={() => {
                        if (visible) return; setVisible(false);
                    }
                    }
                    footer={botoesInferioresDialog}
                    draggable={false}
                    resizable={false}>
                    <p className="m-0">
                        Você não digitou os dados nos campos abaixo. Para continuar é necessário informar!
                    </p>
                </Dialog>

            ) : (
                <span></span>
            )}
        </>


    );
}

export default Header;
