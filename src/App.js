import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import { Component } from 'react';
import Routes from './config/Routes'

class App extends Component {
  // componentDidMount() {
  //   fetch('/catalog')
  //     .then(res => res.json())
  //     .then(games => console.log(games));
  // }

  render(){
    return (
      <div className="App">
        <Header />
        <Routes />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
