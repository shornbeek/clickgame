import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from "./component/Card";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";


class App extends Component {
  render() {

    return (<div>
<h1>hi </h1>
  <Card/>
  <Header/>
  <Wrapper/>
  
</div>
    );
  }
}

export default App;
