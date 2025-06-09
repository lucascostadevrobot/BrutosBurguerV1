import { StyledContainerFormulario } from './StyledLogin.js'
import ImagemLoginFormulario from '../../assets/img/image-login-usuario.png'
import { WrapperContainer } from './WraperContainerForm.js'
import { FormGroup } from '../login/FormGroup.js'
import { BotaoPadraoHover } from '../../Components/button/button.js'
// import { Spinner } from 'reactstrap';

const Login = () => {

    return (

        <WrapperContainer>
            <form>
                <StyledContainerFormulario>
                    <img src={ImagemLoginFormulario} alt='Imagem de Login Usuário'></img>
                    <FormGroup>
                        <label>Digite o seu email</label>
                        <input
                            type='text'
                            name='E-mail'
                            placeholder='Digite seu email'></input>

                        <label>Digite sua senha</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Senha'></input>
                        <BotaoPadraoHover>Entrar</BotaoPadraoHover>
                       <a href='https://github.com/lucascostadevrobot'>Esqueceu a senha?</a>
                    </FormGroup>

                </StyledContainerFormulario>
            </form>
        </WrapperContainer>

    )



}
export default Login;