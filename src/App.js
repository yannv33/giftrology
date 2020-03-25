import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Gif from './components/Gif';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import arrow from './img/arrow.png';
import arrowleft from './img/arrow-left.png'

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
      <div id="body">
        <Router>
        <Switch>
          <Route path="/horoscope">
            <Gif dataFromParent = {this.state.sign} />
            <div id="bouton2">
              <Link id="vHome" to="/"><img src={arrowleft}></img> Revenir à l'accueil</Link>
            </div>
          </Route>

          <Route path="/">
            <Form getSign={this.getSign}/>
            <div id="bouton">
              <Link id="vHoro" to="/horoscope">Voir mon horoscope <img src={arrow}/></Link>
              
            </div>
          </Route>
          <Gif/>
        </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
