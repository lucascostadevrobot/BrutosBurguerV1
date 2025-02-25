import { Container, Button, FrasePrincipalHome } from "../../Styles-Components/header/header";
import Navar from "../Navbar/Navbar";
import { useState } from "react";

const Header = () => { 
    const [formaAtualBotao, setTextoBotao] = useState("Visualizar cardápio");
    const mudarTextoBotao = () =>{
        setTextoBotao("Você abriu o Cardápio");
}

    

    return (
        <>
           <Navar/>
           <Container>
            <h1>Calma ai, vai ir embora mesmo?</h1>
            <FrasePrincipalHome>Seu jeito de olhar, eu me lembro bem</FrasePrincipalHome>
            <FrasePrincipalHome>"Fico querendo sentir o seu cheiro</FrasePrincipalHome>
            <FrasePrincipalHome>É daquele jeito que ela temc</FrasePrincipalHome>
            <FrasePrincipalHome>O tempo todo eu fico feito tonto :)"</FrasePrincipalHome>
            <p></p>
            <Button onClick={mudarTextoBotao}>{formaAtualBotao}</Button>
            </Container>
        </>
       
   
    );
}

export default Header;
