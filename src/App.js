import './App.css';
import Home from "./components/";
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './components/Portfolio.js'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <CssBaseline>
        <Route exact path='/' component={Home}></Route>
        <Route path='/portfolio' component={Portfolio}></Route>
      </CssBaseline>
    </>
  );
}

export default App;
