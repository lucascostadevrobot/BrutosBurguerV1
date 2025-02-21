import GifLoadingCards from '../img/loading-gif-cards.gif'
import { StyleLoadingCards } from '../../Styles-Components/LoadingCards/StyleLoadingCards';
function CarregandoCards () {
  return(

    <StyleLoadingCards>
      <img  src={GifLoadingCards}></img>
      <p>Carregando...</p>
    </StyleLoadingCards>
    
  
  )
}

export default CarregandoCards;