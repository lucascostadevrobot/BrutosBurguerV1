import './App.css';
import {EstilizacaoGlobalBody}  from '../../Styles-Components/global/EstilizacaoGlobal.js';
import Header from '../header/header.jsx';
import GifComponente from '../apresentacao/apresentacao.jsx';
import Footer from '../footer/footer.jsx';
import HamburguerCards from '../HambuguerCards/HamburguerCards.jsx';
import NavBar from '../../Components/navbar/navbar.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../../views/login/index.js'
import { ThemeContext, themes } from '../../Styles-Components/Themes/ThemeContext.js'
import CadastroHamburguer from '../cadastro-hamburguer/cadastro-card-burguer/CadastroCardHamburguer.jsx';



function App() {

  const localizacaoFooter = useLocation();

  return (
    <ThemeContext.Provider value={themes.primaryColor}>
      <EstilizacaoGlobalBody>
        <NavBar />


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
      {localizacaoFooter.pathname !== "/login" && <Footer />}
    </ThemeContext.Provider>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}