import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import globe from './globe.jpg';
import Watchlist from './Components/Watchlist/Watchlist';
import axios from 'axios';
import Blockbusters from './Components/Blockbusters/Blockbusters';

class App extends Component {
  constructor(){
    super();
    //Want to have two states- a top ten choices list and a a list of choosen to be watched. 
    this.state ={
      topTen: []
    };


  }
  componentsDidMount() {
    axios.get('http://www.omdbapi.com/?t=lake+placid&apikey=626875e1').then(results => {
      this.setState({topTen:results.data})
      Blockbusters.updateList();
    });
  }
  render() {
    const {topTen} =this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={globe} className="App-logo" alt="logo" />
          <h1 className="App-title">What on earth are we going to watch?</h1>
        </header>
        <p className="App-intro">
          Alright so it's movie time, what are you going to watch? 
        </p>
        <div className='main-content'>
          <div className='left'>
             
             <Blockbusters />
            
          </div>
          <div className='right'>
            <p>Random Moive Quote goes here</p>
            <div>
                <input/>
            </div>
            <div>
              
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
