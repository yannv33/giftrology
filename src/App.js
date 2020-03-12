import React from 'react';
import logo from './logo.svg';
import './App.css';
import Horoscope from './components/Horoscope';
import Gif from './components/Gif';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);

  }

  state={
    sign:{}
  }

  getSign = (data) => {
    this.setState({
      sign: data
    })
  }



  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route path="/horoscope">
            <p>yes tu as changé de page</p>
            <Link to="/">Revenir à l'accueil</Link>
          </Route>

          <Route path="/">
            <Form getSign={this.getSign}/>
            <Link to="/horoscope">Voir mon horoscope</Link>
          </Route>
          <Gif/>
        </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
