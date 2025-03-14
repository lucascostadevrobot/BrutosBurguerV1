import styled from "styled-components";


export const StyledContainerFormulario = styled.form`
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 40px;
    margin: auto;
    background-color:rgb(255, 15, 15);

    display: flex;
    justify-content: center;
    flex-direction: column; /* Faz os elementos ficarem em coluna (um abaixo do outro) */
    gap: 10px; /* Espaço entre os inputs */
    width: 300px; /* Defina uma largura fixa ou use 100% */

    border-radius: 10px;

    label{
        color: bl;
        font-size: 20px;
        font-weight: bold;
    }
    input{
        width: auto;
        height: 30px;
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: 20px;

        border-radius: 5px;
        border: none;
        background-color: rgb(41, 41, 41);;
    }
    button{
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
    margin-left: 10px;
    margin-top: 20px;
    }
`;