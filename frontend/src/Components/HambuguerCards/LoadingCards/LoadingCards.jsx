import GifLoadingCards from '../../../assets/img/loading-gif-cards.gif'
import { StyleLoadingCards} from './StyleLoadingCards';
function CarregandoCards () {
  return(

    <StyleLoadingCards>
      <img  src={GifLoadingCards}></img>
      <p>Carregando...</p>
    </StyleLoadingCards>
    
  
  )
}

export default CarregandoCards;