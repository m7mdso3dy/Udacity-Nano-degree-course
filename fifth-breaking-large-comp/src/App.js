import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsForm from './Comp/items/ItemsForm';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ItemsForm/>
        {/*
        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
        */}
      </div>
    );
  }
}

export default App;
