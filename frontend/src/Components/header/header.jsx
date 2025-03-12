import { Container, Button, FrasePrincipalHome } from "../../Styles-Components/header/header";
import { useState } from "react";

const Header = () => {
    const [formaAtualBotao, setTextoBotao] = useState("Fazer um pedido");
    const mudarTextoBotao = () => {
        setTextoBotao("Você abriu  um pedido...");
    }



    return (
        <>
         
            <Container>
                <h1>Brutos Burguer</h1>
              
                <Button onClick={mudarTextoBotao}>{formaAtualBotao}</Button>
            </Container>
        </>


    );
}

export default Header;
