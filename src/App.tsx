import { GlobalStyle } from "./styles/global";
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import {Characters} from './components/Characters/Characters';
import { ChosenCharacter } from "./components/ChosenCharacter/ChosenCharacter";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
      <>
      <GlobalStyle/>
      <BrowserRouter>
      <NavBar/>
          <Switch>
          <Route path="/" exact component={Characters}/>
          <Route path="/character" component={ChosenCharacter}/>
          </Switch>
      </BrowserRouter>
      </>
 );  
}
export default App;
