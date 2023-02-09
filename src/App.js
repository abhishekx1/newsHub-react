import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// 2cddac1db72c48b09a0a3488862d729e
export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
