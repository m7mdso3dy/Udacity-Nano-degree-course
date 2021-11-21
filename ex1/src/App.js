import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './Comps/Users/AddUser';
import UsersList from './Comps/Users/UsersList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users:{}
  }
  AddUserData = user => {
    this.setState(prevState => {
      prevState.users[user.userName] = {
        ...user
      }
      return ({
        ...prevState.users,
        
      })
    })
  }
  render() {
    console.log('app',this.state.users);
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
        </div>
        <AddUser
          addUserData={this.AddUserData}
          users={this.state.users} />
        <UsersList
          users={Object.values(this.state.users)}

        />
      </React.Fragment>
    );
  }
}

export default App;
