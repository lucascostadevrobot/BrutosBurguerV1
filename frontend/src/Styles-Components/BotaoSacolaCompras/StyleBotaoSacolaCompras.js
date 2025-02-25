import styled from "styled-components";
export const StyleBotaoSacolaCompras = styled.button`
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 7px;
    background-color: white;
    background-image: url(${props => props.src});
    background-size: contain; /* Faz com que a imagem se ajuste ao tamanho do botão */
    background-repeat: no-repeat;
    background-position: center; /* Centraliza a imagem no botão */
    cursor: pointer;

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
    }
 `;