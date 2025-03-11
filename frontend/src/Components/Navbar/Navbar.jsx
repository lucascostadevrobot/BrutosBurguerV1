import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import  { useNavigate } from 'react-router-dom';


// Importando os estilos do PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';




function ComponenteNavBar() {
  //Criando hook useState para controlar o componente do PrimeReact
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  //Funcao para passar os dados do objeto para o componente
  const modelItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') }, 
    { label: 'Sobre', icon: 'pi pi-fw pi-info', command: () => navigate('/about') },
    { label: 'Cardápio', icon: 'pi pi-fw pi-cog', command: () => navigate('/menu') },
    { label: 'Contato', icon: 'pi pi-fw pi-envelope', command: () => navigate('/contact') },
    { label: 'Admin', icon: 'pi pi-fw pi-user', command: () => navigate("/CadastrarHamburguer") },
  ]

  return (
    <>
      <TabMenu model={modelItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)} />
    </>

  );
}

export default ComponenteNavBar;

