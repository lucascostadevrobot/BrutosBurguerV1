import {StyledContainerFormulario} from './StyledLogin.js'
import ImagemTemporaria from '../../assets/img/image-card-friboi.png'
// import { Spinner } from 'reactstrap';

const Login = () => {

    return (
        <StyledContainerFormulario>
            <form>
                <label>Digite o seu email</label>
                <input 
                type='text' 
                name='E-mail' 
                placeholder='Digite seu email'></input>

                <label>Digite agora a sua senha</label>
                <input 
                type='password'
                 name='password' 
                 placeholder='Senha'></input>
                <button>Entrar</button>
                <img src={ImagemTemporaria} alt='Imagem do Login'></img>
            </form>
        </StyledContainerFormulario>
    )



}
export default Login;