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

  async componentDidMount(){
    const swapi_resp = await fetch('https://swapi.py4e.com/api/people/');
    const fecthed_people = await swapi_resp.json();
    console.log(fecthed_people.results);
    this.setState({people:fecthed_people.results});
  }


  render(){
    return (
      <div>
        <CardList people={this.state.people}/>
      </div>
    );
  }

}
  

export default App;
