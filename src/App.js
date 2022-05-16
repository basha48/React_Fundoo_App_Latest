
import './App.css';

import Login from './Pages/LoginPage/Login.jsx';
import SignUp from '../src/Pages/SignUpPage/SignUp.jsx';
import ForgetEmail from './Components/ForgetEmail/ForgetEmail';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ForgetPassword1 from './Components/ForgetPassword/ForgrtPassword1';
import { BrowserRouter as Router,Switch,Route,withRouter  } from 'react-router-dom';
import AppBarHeader from './Components/AppBar/AppBarHeader';
import PrimarySearchAppBar from './Components/AppBar/AppBarHeader';
import TempDrawer from './Components/Drawer/TempDrawer';



function App() {
  return (
      <Router>
    <Switch>
      <Route exact path="/"  component={withRouter (Login)} />
      <Route  exact path="/SignUp"  component={withRouter (SignUp)} />
      <Route exact path="/ForgetEmail"  component={withRouter(ForgetEmail)} />
      <Route  exact path="/resetpassword/:id"   component={ withRouter(ForgetPassword) } />
      <Route  exact path="/home"   component={ withRouter(AppBarHeader) } />
      {/* <Route  exact path="/Drawer"   component={ withRouter(TempDrawer) } /> */}
    </Switch>
  </Router>
  );
}

export default App;
