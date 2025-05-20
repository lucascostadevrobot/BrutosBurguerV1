import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; /* Empilhar os itens verticalmente */
    justify-content: center; /* Centraliza os itens no eixo principal (vertical) */
    align-items: center; /* Alinha os itens no eixo transversal (horizontal) */
    width: 100%;
    height: 100%;
    padding: 20px; /* Adiciona um pouco de espaçamento */
    background-color: black;
    margin-top: -15px;
    background-color: white;

`;


export const Cabecalho = styled.header`
    width: auto;
    height: auto;
    background-color: rgb(241, 241, 241); /* Corrigido o erro de 'rgbrgb' para 'rgb' */
    color: #c68d22;
    display: block;
    padding: 10px;
    order: 1; /* Faz com que o cabecalho fique antes da foto na ordem */
`;

export const FrasePrincipalHome = styled.p`
    font-family: "Knewave", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px;

`;

export const FotoPerfil = styled.img`
    object-fit: cover;
    order: 2; /* Faz com que a foto vá para a segunda posição */
    justify-self: end; /* Alinha a foto à direita */
`;

export const Button = styled.button`
    background-color: rgb(255, 114, 48);
    color: rgb(29, 36, 73);
    width: 200px;
    height: 40px;
    font-size: 15px;
    font-weight: 900;
    border: none;
    border-radius: 2rem;

    transition: all 0.3s ease; /* Transição suave para todas as propriedades */
    
    /* Efeito de hover */
    &:hover {
        background-color: rgb(29, 36, 73); /* Muda a cor de fundo */
        color: rgb(255, 255, 255); /* Muda a cor do texto */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
        transform: translateY(-2px); /* Leve elevação do botão */
    }

    /* Efeito de foco (quando o botão está focado) */
    &:focus {
        outline: none; /* Remove o contorno padrão */
        box-shadow: 0 0 10px rgba(29, 36, 73, 0.6); /* Sombra quando focado */
    }
    
`;
