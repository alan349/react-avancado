import React from 'react';
import { memo } from 'react';

function Counter2(props) {
  console.log("counter2");
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.setValue}>Counter2</button>
    </div>
  )
}

export default memo(Counter2);