import styled from "styled-components";


export const StyledContainerFormulario = styled.form`
    height: 100%;
    padding: 40px;
    margin: auto;
    background-color: rgb(206, 206, 206);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    
    gap: 1rem;
    border-radius: 10px;
   
    label{
      
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
    input{
    padding: 20px;
    width: auto;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: rgb(41, 41, 41);
    }

     img{
    width: 438px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    a{
    font-size: 15px;
    }
`;
