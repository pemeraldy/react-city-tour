import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.scss';
import TourList from './components/TourList'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TourList />
        <Footer />
      </div>
    );
  }
}

export default App;
