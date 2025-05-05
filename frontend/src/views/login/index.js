import {StyledContainerFormulario} from './StyledLogin.js'
import ImagemLogin from '../../assets/img/log-in.png'
// import { Spinner } from 'reactstrap';

const Login = () => {

    return (
        <StyledContainerFormulario>
            <form>
                <img src={ImagemLogin} alt="Logo de Login"></img>
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
            </form>
        </StyledContainerFormulario>
    )



}
export default Login;