import React from 'react';
import {Provider} from 'react-redux'
import store from '../store.js'

//Components
import Header from './Header'
import Landing from './Landing.js';

//Styles
import '../styles/App.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Landing />
      </Provider>

    </div>
  );
}

export default App;
