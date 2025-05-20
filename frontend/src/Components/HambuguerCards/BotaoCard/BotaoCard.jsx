import { StyleBotaoCard,StyleContainerBotaoCard } from "../BotaoCard/StyleBotaoCard";
import BotaoSacolaCompras from "../../botao-sacola-compras/BotaoSacolaCompras";

function BotaoCard (){
    return (
        <StyleContainerBotaoCard>
        <StyleBotaoCard>Mais informações</StyleBotaoCard>
        <BotaoSacolaCompras></BotaoSacolaCompras>
        </StyleContainerBotaoCard>
      
    );
}

export default BotaoCard;