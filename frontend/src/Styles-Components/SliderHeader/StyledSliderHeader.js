import styled from "styled-components";

export const SliderContainer = styled.img`
    width: 100%;
    max-width: 1200px; /* Define um limite de largura */
    height: 500px; /* Defina um tamanho fixo ou ajuste dinamicamente */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border-radius: 40px;
    overflow: hidden; /* Evita que a imagem ultrapasse o container */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Mantém a proporção da imagem */
        transition: transform 0.5s ease-in-out; /* Suaviza a transição */
        border-radius: 40px;
    }
`;


