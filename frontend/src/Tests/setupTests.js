import '@testing-library/jest-dom';
import {App} from './App';


test('testTelaInicial', () => {     
    /*Renderiza a tela que será testada: Importada em './App'*/
     render(<App></App>)
     /*Constante text que recebe um screen buscando no código se existe algum elemento com a palavra 'Edit'*/
     const text = screen.getByText(/Edit/)
     /*Espera-se que exista o Edita, caso não exista o teste falha*/
     expect(text).toBeInTheDocument();
    
    })