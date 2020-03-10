import React from 'react';
import logo from './logo.svg';
import './App.css';
import Horoscope from './components/Horoscope';
import Gif from './components/Gif';
import Form from './components/Form';



class App extends React.Component {

  render() {
    return (
      <div>
        <Form/>
      </div>
    );
  }

}

export default App;
