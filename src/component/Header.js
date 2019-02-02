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
  <div className="header" styles={styles.header}>
    <div className="title" styles={styles.title}>{props.children}</div>
    <div className="scores" styles={styles.scores}>
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
