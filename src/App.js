import Home from '../src/pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />  
        </Route> 
        <Route path='/signin'>
          <SignIn />  
        </Route>
        <Route path='/signup'>
          <SignUp />  
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
