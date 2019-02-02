import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from "./component/Card";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";
import friends from "./friends.json";


class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0

  }


  render() {

    return (

      <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
      {this.state.friends.map(card => (
        <Card
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
    );
  }
}

export default App;
