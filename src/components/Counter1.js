import React from 'react';
import { memo } from 'react';

function Counter1(props) {
  console.log("counter1");
  return (
    <div>
      <h1>{props.value} - { props.eventForOd }</h1>
      <button onClick={props.setValue}>Counter1</button>
    </div>
  )
}

export default memo(Counter1);