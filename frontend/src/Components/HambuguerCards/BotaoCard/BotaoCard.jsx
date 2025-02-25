import { StyleBotaoCard,StyleContainerBotaoCard } from "../../../Styles-Components/HamburguerCards/BotaoCard/StyleBotaoCard";
import BotaoSacolaCompras from "../../BotaoSacolaCompras/BotaoSacolaCompras.jsx";

function BotaoCard (){
    return (
        <StyleContainerBotaoCard>
        <StyleBotaoCard>Mais informações</StyleBotaoCard>
        <BotaoSacolaCompras></BotaoSacolaCompras>
        </StyleContainerBotaoCard>
      
    );
}

export default BotaoCard;