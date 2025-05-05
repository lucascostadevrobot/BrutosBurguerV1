import { CardContainer, ImagemCard, TituloBurguerCard, DescricaoBurguerCard } from "../../Styles-Components/HamburguerCards/SytaleHamburguerCards.js";
import CarregandoCards from './LoadingCards/LoadingCards.jsx';
import ImagemLoadingCards from "./LoadingCards/ImagemLoadingCards.jsx";
import BotaoCard from "./BotaoCard/BotaoCard.jsx"
import imageCardFriboi from "../../assets/img/image-card-friboi.png";
import { Carousel } from 'primereact/carousel';


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

function HamburguerCards() {
    const BASE_URL = 'https://brutosburguerv1.onrender.com/api/v1/dadosBurguer/listarDadosBurguer';
    const [dadosApiBurguers, setDadosApiBurguers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState("Carregando...");

    useEffect(() => {
        // Função para chamar a API
        const exibirDadosHamburguer = async () => {
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setDadosApiBurguers(data);
                setLoading(false);  // Finaliza o carregamento quando os dados são recebidos
                console.log(data);
            } catch (e) {
                setLoading(false);  // Finaliza o carregamento caso ocorra erro
                setLoadingMessage("Erro: Sua API não está funcionando");
                console.log("Erro: Sua API não está funcionando" + e);
            }
        };

        exibirDadosHamburguer();

        // Verifica o tempo de carregamento da API e limite de 2 segundos para exibir mensagem de erro
        const tempoCarregamentoApi = setTimeout(() => {
            if (loading) {
                setLoadingMessage("Erro: Sua API demorou muito para responder");
                setLoading(false); // Finaliza o carregamento após tempo limite
            }
        }, 5000); // Timeout de 2 segundos

        // Limpa o timeout caso a API retorne antes do tempo limite
        return () => clearTimeout(tempoCarregamentoApi);
    }, [loading]);  // O useEffect agora é executado pelo menos uma vez quando o componente é montado


    //Separa uma função para renderizar os itens do carrossel
    const itemsCarroseulTemplate = (dadosApiBurguers) => {
        return (
            <CardContainer style={{ width: '18rem' }}>
                <ImagemCard src={imageCardFriboi}></ImagemCard>
                <TituloBurguerCard>{dadosApiBurguers.titulo_burguer}</TituloBurguerCard>
                <DescricaoBurguerCard>{dadosApiBurguers.descricao_burguer}</DescricaoBurguerCard>
                <BotaoCard></BotaoCard>
            </CardContainer>
        );
    }

    return (
        <>
            {loading ? (
                <CarregandoCards>{loadingMessage}</CarregandoCards>
            ) : (
                dadosApiBurguers.length > 0 ? (
                        <Carousel 
                        value={dadosApiBurguers} 
                        itemTemplate={itemsCarroseulTemplate}
                        numVisible={4}  // Mostra 3 itens ao mesmo tempo
                        >
                        </Carousel>
                ) : (
                    <div>
                        <ImagemLoadingCards>

                        </ImagemLoadingCards>
                        <p>Não há dados disponíveis...Contate o administrador!</p>
                    </div>
                )
            )}
        </>
    );
}

export default HamburguerCards;
