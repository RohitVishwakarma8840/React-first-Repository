import React from 'react'

function Printhello(){
    console.log("print hello");
}

function Printondblclick(){
    console.log(" button was double clicked ");
}
function Printbye(){
    console.log("print bye");
}

const Button = () => {
  return (
    <div>
     <button onClick={Printhello}>Click me !</button> 
     <p onMouseOver={Printbye}>this para is for event demo Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Quibusdam nobis consequatur, qui modi quam ratione iste eligendi vero assumenda esse et fugit error!</p>
      <button onDoubleClick={Printondblclick}>double click me !</button>
    </div>
  )
}

export default Button
