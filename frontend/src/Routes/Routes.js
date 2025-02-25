import { Route, BrowserRouter } from "react-router-dom"; 

const Routes = () => {
   return(
    <BrowserRouter>
        <Route path="./" component={Home} exact />
        <Route path="../Components/CadastroHamburguer/CadastroHamburguer" component={CadastroHamburguer} />
        <Route path="/contact" component={Contact} />
    </BrowserRouter>

   )
}
export default Routes;