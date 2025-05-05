import './App.css';
import { EstilizacaoGlobalBody } from '../../Styles-Components/global/EstilizacaoGlobal.js';
import Header from '../header/header.jsx';
import GifComponente from '../apresentacao/apresentacao.jsx';
import Footer from '../footer/footer.jsx';
import HamburguerCards from '../HambuguerCards/HamburguerCards.jsx';
import NavBar from '../Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../views/login/index.js'
import { ThemeContext, themes } from '../../Styles-Components/Themes/ThemeContext.js'
import CadastroHamburguer from '../CadastroHamburguer/CadastroCardHamburguer.jsx';



function App() {

  return (

    <BrowserRouter> {/* Envolve toda a aplicação com BrowserRouter | Diz que usaremos o conceito das Rotas*/}
      <ThemeContext.Provider value={themes.primaryColor}>
        <EstilizacaoGlobalBody>
          <NavBar />

          {/* Definindo as rotas da  aplicação */}
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <GifComponente />
                <HamburguerCards />
              </>
            } />
            <Route path="/login" element={
              <Login />
            } />
              <Route path="/CadastroHamburguer" element={
              <CadastroHamburguer />
            } />
          </Routes>
        </EstilizacaoGlobalBody>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
