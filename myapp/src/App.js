import React, { Component } from 'react';
import Ninjas from './components/ninjas';
import AddNinja from './components/AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: "Olaf", age: 30, belt: "Black", id: 1 },
      { name: "Regis", age: 20, belt: "Yellow", id: 2 },
      { name: "Honey", age: 25, belt: "green", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
