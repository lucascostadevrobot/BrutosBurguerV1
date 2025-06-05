import styled from "styled-components";


export const StyledContainerFormulario = styled.form`
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 40px;
    margin: auto;
    margin-top: 80px;
    background-color:rgb(255, 83, 83);

    display: flex;
    justify-content: center;
    flex-direction: column; /* Faz os elementos ficarem em coluna (um abaixo do outro) */
    gap: 10px; /* Espaço entre os inputs */
    width: 300px; /* Defina uma largura fixa ou use 100% */

    border-radius: 10px;

    label{
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
    input{
        width: auto;
        height: 50px;
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: 20px;

        border-radius: 5px;
        border: none;
        color: white;
        background-color: rgb(41, 41, 41);
    }
    button{
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    border: none; /* Remove a borda do botão */
    border-radius: 7px; /* Adiciona bordas arredondadas ao botão */
    font-size: 20px;
    padding: 7px;
    border: 2px;
    box-shadow: 0px 0.3rem 0px #dcdcdc;
    margin-left: 10px;
    margin-top: 20px;
    }

    

form img{
  width: 400px;    /* ajuste o tamanho conforme seu layout */
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`;
