
import './App.css';

import Login from './Pages/LoginPage/Login.jsx';
import SignUp from '../src/Pages/SignUpPage/SignUp.jsx';
import ForgetEmail from './Components/ForgetEmail/ForgetEmail';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ForgetPassword1 from './Components/ForgetPassword/ForgrtPassword1';
import { Switch,Route,BrowserRouter as Router  } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
    <Switch>
      <Route exact path="/"  component={Login} />
      <Route  exact path="/SignUp"  component={ SignUp} />
      <Route exact path="/ForgetEmail"  component={ ForgetEmail} />
      <Route  exact path="/resetpassword/:id"   component={ForgetPassword } />
    </Switch>
  </Router>
    </div>
  );
}

export default App;
