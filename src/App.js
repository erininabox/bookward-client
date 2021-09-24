import './App.css';
import { Component } from 'react';
import Routes from './config/Routes'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
