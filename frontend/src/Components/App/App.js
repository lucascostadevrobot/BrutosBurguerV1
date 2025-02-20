import './App.css';
import { EstilizacaoGlobalBody } from '../../Styles-Components/global/EstilizacaoGlobal.js';
import Header from '../header/header.jsx';
import GifComponente from '../apresentacao/apresentacao.jsx';
import Footer from '../footer/footer.jsx';
import HamburguerCards from '../HambuguerCards/HamburguerCards.jsx';

function App() {
  return (
      <EstilizacaoGlobalBody>
        <Header/>
        <GifComponente />
        <HamburguerCards/>
        <Footer />
      </EstilizacaoGlobalBody>

  );
}

export default App;
