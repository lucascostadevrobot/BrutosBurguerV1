import styled from "styled-components";

export const CardContainer = styled.div`
width: 100%;
height: 100% !important;
margin: 40px;

border: 2px;
border-radius: 10px;
box-shadow: 0px 0.4rem 0px #dcdcdc;
padding: 1.9rem !important;
flex-direction: column !important;
display: flex !important;
background-color:rgb(240, 237, 80);

    //Inicialização dos efeitos com Hover
    transition: all 0.3s ease; /* Transição suave para todas as propriedades */
    
    /* Efeito de hover */
    &:hover {
        background-color: rgb(29, 36, 73); /* Muda a cor de fundo */
        color: rgb(255, 255, 255); /* Muda a cor do texto */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
        transform: translateY(-6px); /* Leve elevação do card */
    }

    /* Efeito de foco (quando o botão está focado) */
    &:focus {
        outline: none; /* Remove o contorno padrão */
        box-shadow: 0 0 10px rgba(29, 36, 73, 0.6); /* Sombra quando focado */
    }
`;

export const ImagemCard = styled.img`
    width: 300px;
`;

export const TituloBurguerCard = styled.h3`
    padding: 0%;
`;