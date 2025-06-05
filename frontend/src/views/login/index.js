import { StyledContainerFormulario } from './StyledLogin.js'
import ImagemLogin from '../../assets/img/log-in.png'
import ImagemLoginFormulario from '../../assets/img/image-login-usuario.png'
import { WrapperContainer } from './WraperContainerForm.js'
// import { Spinner } from 'reactstrap';

const Login = () => {

    return (

        <form>
            <WrapperContainer>
                <img src={ImagemLoginFormulario} alt='Imagem de Login Usuário'></img>
                <StyledContainerFormulario>
                    <br></br>
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
                    <button>Entrar</button>
                </StyledContainerFormulario>

            </WrapperContainer>

        </form>
    )



}
export default Login;