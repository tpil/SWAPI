import React from 'react';
import Card from './Card.js';
import CardList from './CardList.js';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        people :[],
        searchfield:''
    }
  }
  render(){
    return (
      <div>
        <CardList />
      </div>
    );
  }

}
  

export default App;
