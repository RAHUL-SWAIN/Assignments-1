import React from 'react'


{/* <Second name="React" x="b" y = "c"/> */}
const props = {
    name : "React ",
    x : 'b ',
    y : 'c',
}

function Properties(props) {
    const {name , x, y } = props;
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.x}</p>
      <p>{props.y}</p>
    </div>
  );
   
}

export default Properties;