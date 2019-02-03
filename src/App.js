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

  // AlertOver = score => {

  // }

  Clicker = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.AlertOver();
        }
      }
    });
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
