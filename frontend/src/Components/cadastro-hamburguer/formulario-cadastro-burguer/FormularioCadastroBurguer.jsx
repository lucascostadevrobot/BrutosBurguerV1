import { StyleFormularioCadastroCardBurguer } from '../formulario-cadastro-burguer/StyleFormularioCadastroCardBurguer';
import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { BotaoPadraoHover } from '../../button/button.js'


function FormularioCadastroCardHamburguer() {

    //production =https://brutosburguerv1.onrender.com/api/v1/dadosCardsBurguer/cadastrarCardsBurguer
    //dev = http://localhost:8090/api/v1/dadosCardsBurguer/cadastrarCardsBurguer
    const BASE_URL = 'https://brutosburguerv1.onrender.com/api/v1/dadosCardsBurguer/cadastrarCardsBurguer';
    const [envioDadosHamburguerApi, setenvioDadosHamburguerApi] = useState({
        titulo_burguer: '',
        descricao_burguer: ''
    });

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');
    const [formularioPreenchido, setFormularioPreenchido] = useState(null);

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


            if (!response.ok) {
                alert(`Erro ao cadastrar: ${response.status} - ${response.statusText}`);
                return false;
            }
            const data = await response.json();
            return true;
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
  * [Linha] - Botões inferiores do alert dialog que aparece ao utilizar formulario de cadastro.
  */
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit (recarregar a página)

        if ((!envioDadosHamburguerApi.titulo_burguer && !envioDadosHamburguerApi.descricao_burguer)
            || (envioDadosHamburguerApi.titulo_burguer === '' && envioDadosHamburguerApi.descricao_burguer === '')) {
            setFormularioPreenchido(false);
            setPosition(position);
            setVisible(true);

        } else {
            const sucessoPromisse = await enviaDadosFormularioApi();
            if (sucessoPromisse) {
                setFormularioPreenchido(true);
                setPosition(position);
                setVisible(true);
            } else {
                setFormularioPreenchido(null);
                setVisible(false);
                alert("API (Application Programming Interface) não está funcionando, contate um administrador.")
            }

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
                <BotaoPadraoHover type="submit">Cadastrar</BotaoPadraoHover>
            </form>


            {!formularioPreenchido ? (
                <Dialog header="Opps!!" visible={visible} position={position} style={{ width: '50vw' }}
                    onHide={() => {
                        if (visible) return; setVisible(false);
                    }
                    }
                    footer={botoesInferioresDialog}
                    draggable={false}
                    resizable={false}>
                    <p className="m-0">
                        Você não digitou os dados nos campos abaixo. Para continuar é necessário informar!
                    </p>
                </Dialog>
            ) : (
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
            )
            }
        </StyleFormularioCadastroCardBurguer>
    );
}

export default FormularioCadastroCardHamburguer;
