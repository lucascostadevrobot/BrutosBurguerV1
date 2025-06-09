import styled from "styled-components";

export const BotaoPadraoHover = styled.button`
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    border: none; /* Remove a borda do botão */
    border-radius: 7px; /* Adiciona bordas arredondadas ao botão */
    font-size: 20px;
    padding: 5px;
    border: 2px;
    box-shadow: 0px 0.3rem 0px #dcdcdc;
    margin-left: 2px;
    margin-top: 20px;

    //Inicialização dos efeitos com Hover
    transition: all 0.3s ease; /* Transição suave para todas as propriedades */
    
    /* Efeito de hover */
    &:hover {
        background-color: rgba(235, 255, 51, 0.97); /* Muda a cor de fundo */
        color: rgb(22, 22, 22); /* Muda a cor do texto */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
        transform: translateY(-6px); /* Leve elevação do card */
    }

    /* Efeito de foco (quando o botão está focado) */
    &:focus {
        outline: none; /* Remove o contorno padrão */
        box-shadow: 0 0 10px rgba(235, 255, 51, 0.97); /* Sombra quando focado */
    }`;