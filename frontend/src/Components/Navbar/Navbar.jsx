import { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function ComponenteNavBar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
    { label: 'Sobre', icon: 'pi pi-info', command: () => navigate('/about') },
    { label: 'Cardápio', icon: 'pi pi-shopping-cart', command: () => navigate('/menu') },
    { label: 'Contato', icon: 'pi pi-envelope', command: () => navigate('/contact') },
    { label: 'Área do Cliente', icon: 'pi pi-user', command: () => navigate('/login') },
  ];

  return (
  
    <div className="p-3 shadow-2 flex justify-between align-items-center">
    <div className="font-bold text-xl">Brutos Burguer</div>
    <div className="p-menubar">

      {isMobile ? (
        <>
          <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="p-button-text" />
          <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <h2 className="mb-3">Menu</h2>
            {items.map((item, idx) => (
              <Button
                key={idx}
                label={item.label}
                icon={item.icon}
                className="p-button-text w-full mb-2"
                onClick={() => {
                  item.command();
                  setVisible(false);
                }}
              />
            ))}
          </Sidebar>
        </>
      ) : (
        <Menubar model={items} />
      )}
    </div>
    </div>
  );
}

export default ComponenteNavBar;
