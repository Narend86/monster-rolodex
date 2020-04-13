import React,{Component} from 'react';
import './App.css';
import './components/card-list/card-list.component';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/search-box.component';

class App extends Component{
constructor(){
  super();
  this.state={
    monsters:[],
    searchField:''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}));
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}

  render(){
    const {monsters, searchField} = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
    <CardList monsters={filterdMonsters} />
    </div>
  );
}
}
// function App() {

// }

export default App;
