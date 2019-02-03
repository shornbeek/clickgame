import React from "react";

const styles = {
    header: {
        width: "100%",
        fontSize: "2rem",
        color: "#2A77AE",
        marginBottom: "10px"
      },
      
      title: {
        float: "left"
      },
      
      scores: {
        float: "right"
      }
  };

  const Header = props => (
    <div className="header" style={styles.header}>
      <div style={styles.title} className="title">{props.children} </div>
      <div className="scores" style={styles.scores}>
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  );
  
  export default Header;
