import './App.css';
import { Component } from 'react';
import Routes from './config/Routes'
import Header from './components/Header';
// import Footer from './components/Footer';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
