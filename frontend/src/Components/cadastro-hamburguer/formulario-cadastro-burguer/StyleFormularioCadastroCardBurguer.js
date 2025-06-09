import styled from "styled-components";

/*Estilização global do Formulario com a tag Form*/
export const StyleFormularioCadastroCardBurguer = styled.div`
    width: auto;
    display: flex;  
    align-items: center;
    justify-content: center;
    margin: 100px;
    padding: 5%;
    border: 1px solid black;    
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    label{
        font-size: 20px;
        font-weight: bold;
    }
    input{
        width: 100%;
        height: 30px;
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: 20px;
    }
`;