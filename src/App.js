import React, { Component } from 'react';
import './App.css';
import Name from './components/Name'
import Summary from './components/Summary'
import ExtraPanel from './components/ExtraPanel'
import { StateProvider } from './brix'
import { store } from './context/createStore'

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <StateProvider value={store}>
          <div className="App">
            <Name />
            <Summary />
            <ExtraPanel />
          </div>
        </StateProvider>
      </React.StrictMode >
    );
  }
}

export default App;
