import { CardContainer, ImagemCard, TituloBurguerCard } from "../../Styles-Components/HamburguerCards/SytaleHamburguerCards.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageCardFriboi from "../img/image-card-friboi.png"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';



function HamburguerCards() {
    const BASE_URL = 'http://localhost:8080/api/v1/dadosBurguer/listarDadosBurguer';
    const [dadosApiBurguers, setDadosApiBurguers] = useState([]);

    //Funcao que chama API
    useEffect(() => {
        const exibirDadosHamburguer = async () => {
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setDadosApiBurguers(data);
                console.log(data)
            } catch (e) {
                console.log("Erro: Sua API não está funcionando" + e)

            }
        }
        exibirDadosHamburguer();
    }, []);

    //Returno principal do JSX
    return (
        <>
            {dadosApiBurguers.length > 0 ? (
                dadosApiBurguers.map((dadosApiBurguers, index) => (
            <CardContainer key={index} style={{ width: '18rem' }}>
                <ImagemCard  src={imageCardFriboi}></ImagemCard>
                <TituloBurguerCard>{dadosApiBurguers.titulo_burguer}</TituloBurguerCard>
                <p>{dadosApiBurguers.descricao_burguer}</p>
                <Button variant="dark">Botão do CardLanche</Button>
            </CardContainer>
            ))
            ) : (
            // Exibindo um texto de loading enquanto os dados não chegam
            <p>Carregando...</p>
            )}
        </>
    )
}

export default HamburguerCards;