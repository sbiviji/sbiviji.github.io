import './App.css';
import Home from "./components/";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume.js'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <CssBaseline>
        <Route exact path='/' component={Home}></Route>
        <Route path='/resume' component={Resume}></Route>
      </CssBaseline>
    </>
  );
}

export default App;
