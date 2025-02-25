import { StyleFormularioCadastroCardBurguer } from '../../Styles-Components/HamburguerCards/StyleFormularioCadastroCardBurguer/StyleFormularioCadastroCardBurguer.js';
import { useState, useEffect } from 'react';

function FormularioCadastroCardHamburguer() {

    const BASE_URL = 'http://localhost:8080/api/v1/dadosBurguer/cadastrarDadosBurguer';
    const [envioDadosHamburguerApi, setenvioDadosHamburguerApi] = useState({
        nome: '',
        descricao: '',
        imagem: null,
    });

    /**
     * [Linha] - Tratamento dos dados com a API
     */
    const enviaDadosFormularioApi = async () => {
        try {
            const formData = new FormData(); // Usando FormData para enviar arquivos
            formData.append('nome', envioDadosHamburguerApi.nome);
            formData.append('descricao', envioDadosHamburguerApi.descricao);
            if (envioDadosHamburguerApi.imagem) {
                formData.append('imagem', envioDadosHamburguerApi.imagem); // Adiciona a imagem no corpo da requisição
            }

            const response = await fetch(BASE_URL, {
                method: 'POST',
                body: formData, // Envia como FormData para aceitar arquivos
            });

            const data = await response.json();
            console.log(data); // Verifica o retorno da API
        } catch (e) {
            console.log("Erro: Sua API não está funcionando", e);
        }
    }

      /**
     * [Linha] - Criamos o useEffect separado do resolvedDestroy
     */
    useEffect(() => {
        // Se necessário, o envio pode ser feito aqui também, mas vamos usar o onSubmit para um controle mais preciso
    }, [envioDadosHamburguerApi]);

      /**
     * [Linha] - Criamos a função handleChange para capturar e lidar com  as alterações nos campos do formulário
     */
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            // Para o tipo 'file', guardamos o arquivo diretamente
            setenvioDadosHamburguerApi((prevState) => ({
                ...prevState,
                [name]: files[0], // Guardamos o arquivo enviado
            }));
        } else {
            // Para campos de texto, guardamos o valor digitado
            setenvioDadosHamburguerApi((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit (recarregar a página)
        enviaDadosFormularioApi(); // Envia os dados para a API
    }

    /**
     * [Linha] - Return padrão dos compoentes
     */
    return (
        <StyleFormularioCadastroCardBurguer>
            <form onSubmit={handleSubmit}>
                <label>Nome do Hamburguer</label>
                <input 
                    type="text" 
                    placeholder="Digite aqui o título do seu hamburguer"
                    name="nome" 
                    value={envioDadosHamburguerApi.nome} 
                    onChange={handleChange}
                />
                <label>Descrição</label>
                <input 
                    type="text"
                    placeholder="Descrição do seu hamburguer"
                    name="descricao" 
                    value={envioDadosHamburguerApi.descricao} 
                    onChange={handleChange}
                />
                <label>Enviar imagem do card</label>
                <input 
                    type="file" 
                    name="imagem" 
                    onChange={handleChange}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </StyleFormularioCadastroCardBurguer>
    )
}

export default FormularioCadastroCardHamburguer;
