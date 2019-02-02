import React from "react";


const style = {
    card: {
        background: "#fff",
        borderRadius: "2px",
        height: "250px",
        margin: "1rem",
        position: "relative",
        width: "325px",
        boxShadow: "0 3px 6px #999, 0 3px 6px #999",
        textAlign: "left"
      },
      
      imgContainer: {
        height: "100%",
        overflow: "hidden",
        textAlign: "center",
        background: "#6CADDC"
      },
      img: {
        width: "60%",
        maxWidth: "250px"
      },
      
      content: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: "15px"
      }

}



const Card = props => (
  <div className="card" style={style.card} onClick={() => props.clickCount(props.id)}>
    <div className="img-container" style={style.imgContainer}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;