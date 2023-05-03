import React, { useContext } from 'react';
import "./App.css"
import Header from '../Components/Header/Header';
import CreateNewAccount from '../Pages/Create New Account/Login';
import YourProfile from '../Pages/Your Profile/YourProfile';
import Welcome from '../Pages/Welcome/Welcome';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import LoginCTX from '../Context/LoginCTX';

function App(props) {

  const logginCTX = useContext(LoginCTX)

  return (
    <div className=' App-div '>
      <Header />

      <Switch>
        <Route exact path="/"><Welcome /></Route>
        <Route path="/login"><CreateNewAccount /></Route>

        <Route path="/your-profile">
          {
            logginCTX.isLoggedIn ? <YourProfile /> : <Redirect to="/login" />
          }
        </Route>


        <Route path="*"><Welcome /></Route>
      </Switch>

    </div>
  );
}

export default App;
