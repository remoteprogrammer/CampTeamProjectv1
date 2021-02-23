import React, { Component } from 'react'
import './App.css';
import MainComponent from '../src/components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
            <BrowserRouter>
    <div className="App">
      <MainComponent />
    </div>
    </BrowserRouter>
        </Provider>
  );
}

export default App;
