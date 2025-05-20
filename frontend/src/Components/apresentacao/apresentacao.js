import styled from 'styled-components';

export const Gif = styled.img`
  width: 100%; /* Ocupa toda a largura */
  height: 100vh; /* Ocupa toda a altura da tela */
  object-fit: cover; /* Garante que o gif cubra a área sem distorcer */
  border: 4px solid #3498db;
  border-color: rgb(255, 255, 255);
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0; /* Remove margens extras */  
`;