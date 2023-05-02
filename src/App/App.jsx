import React from 'react';
import "./App.css"
import Header from '../Components/Header/Header';
import CreateNewAccount from '../Pages/Create New Account/Login';
import YourProfile from '../Pages/Your Profile/YourProfile';
import Welcome from '../Pages/Welcome/Welcome';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App(props) {
  return (
    <div className=' App-div '>
      <Header />

      <Switch>
        <Route exact path="/"><Welcome /></Route>
        <Route path="/login"><CreateNewAccount /></Route>
        <Route path="/your-profile"><YourProfile /></Route>
      </Switch>

    </div>
  );
}

export default App;
