import './App.css';
import Home from "./components/";
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './components/Portfolio.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <CssBaseline>
        <Route exact path='/sbvg' component={Home}></Route>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
      </CssBaseline>
    </>
  );
}

export default App;
