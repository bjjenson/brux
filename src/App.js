import React, { Component } from 'react';
import './App.css';
import Name from './components/Name'
import Summary from './components/Summary'
import Address from './components/Address'
import { StateProvider } from './redux'
import { store } from './context/createStore'

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <StateProvider value={store}>
          <div className="App">
            <Name />
            <Summary />
            <Address />
          </div>
        </StateProvider>
      </React.StrictMode >
    );
  }
}

export default App;
