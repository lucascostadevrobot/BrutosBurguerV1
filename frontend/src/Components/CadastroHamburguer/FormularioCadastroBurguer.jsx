import { StyleFormularioCadastroCardBurguer } from '../../Styles-Components/HamburguerCards/StyleFormularioCadastroCardBurguer/StyleFormularioCadastroCardBurguer.js';
import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function FormularioCadastroCardHamburguer() {

    const BASE_URL = 'http://localhost:8090/api/v1/dadosBurguer/cadastrarBurguer';
    const [envioDadosHamburguerApi, setenvioDadosHamburguerApi] = useState({
        titulo_burguer: '',
        descricao_burguer: ''
    });

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');

    /**
     * [Linha] - Tratamento dos dados com a API
     */
    const enviaDadosFormularioApi = async () => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(envioDadosHamburguerApi)

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


    const botoesInferioresDialog = (
        <div>
            <Button label="Ok!" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );


    /**
   * [Linha] - Criamos a função handleChange para capturar e lidar com  as alterações nos campos do formulário
   */
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Para campos de texto, guardamos o valor digitado
        setenvioDadosHamburguerApi((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit (recarregar a página)
        enviaDadosFormularioApi(); // Envia os dados para a API
        if (handleSubmit) {
            setPosition(position);
            setVisible(true);
        } else {
            alert("Ops!!! Houve um erro, tente cadastrar novamente.")
        }
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
                    name="titulo_burguer"
                    value={envioDadosHamburguerApi.titulo_burguer}
                    onChange={handleChange}
                />
                <label>Descrição</label>
                <input
                    type="text"
                    placeholder="Descrição do seu hamburguer"
                    name="descricao_burguer"
                    value={envioDadosHamburguerApi.descricao_burguer}
                    onChange={handleChange}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Dialog header="Parabéns!!! Cadastrado com sucesso." visible={visible} position={position} style={{ width: '50vw' }}
                onHide={() => {
                    if (!visible) return; setVisible(false);
                }
                }
                footer={botoesInferioresDialog}
                draggable={false}
                resizable={false}>
                <p className="m-0">
                    O seu hamburguer será mostrado na faixa de promoções especiais!!!
                </p>
            </Dialog>
        </StyleFormularioCadastroCardBurguer>

    )
}

export default FormularioCadastroCardHamburguer;
