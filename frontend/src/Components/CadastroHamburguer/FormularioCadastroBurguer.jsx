import { StyleFormularioCadastroCardBurguer } from
    '../../Styles-Components/HamburguerCards/StyleFormularioCadastroCardBurguer/StyleFormularioCadastroCardBurguer.js';
import { useState, useEffect } from 'react';


function FormularioCadastroCardHamburguer() {

    /**
     * Linha:\\ Inicio do tratamento para envio de dados para API
     */
    const BASE_URL = 'http://localhost:8080/api/v1/dadosBurguer/cadastrarDadosBurguer';
    const [envioDadosHamburguerApi, setenvioDadosHamburguerApi] = useState({
        nome: '',
        descricao: '',
    });

    const resolvedDestroy = async () => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', /** Transforma o envio de dados para json */
                },
                body: JSON.stringify(envioDadosHamburguerApi),
            });

            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log("Erro: Sua API não está funcionando" + e);
        }
    }

    /**
     * Linha:\\ Cria uma funcao useEffect para enviar os dados para a API
     * Separamos ela do resolvedDestroy consiga usar o conceito de funções assincronas usando o async e await
     * O useEffect é uma função que é execut
     */
    useEffect(() => {
        resolvedDestroy();
    }, [envioDadosHamburguerApi]);


    /**
     * Linha:\\ Função para lidar com mudanças nos campos do formulário
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setenvioDadosHamburguerApi((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    /** 
     * Linha:\\ Retorno padrão do componente FormularioCadastroCardHamburguer
    */
    return (
        <>
            <StyleFormularioCadastroCardBurguer>
                <form>
                    <label>Nome do Hamburguer</label>
                    <input type="text" placeholder="Digite aqui o título do seu hamburguer"
                        value={envioDadosHamburguerApi.nome} 
                        onChange={handleChange}/>
                    <label>Descrição</label>
                    <input type="text" placeholder="Descrição do seu hamburguer"
                        value={envioDadosHamburguerApi.descricao} 
                        onChange={handleChange}/>
                    <label>Enviar imagem do card</label>
                    <input type="imagem" placeholder="Imagem"
                        value={envioDadosHamburguerApi.imagem} 
                        onChange={handleChange}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </ StyleFormularioCadastroCardBurguer>
        </>

    )
}
export default FormularioCadastroCardHamburguer;