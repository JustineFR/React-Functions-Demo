import React, { useState } from 'react'
import Display from './Display';
import Controls from './Controls';

function Panel(props) {
  const [count, setCount] = useState(0);

  const changeCount = direction => {
    setCount(count + direction);
  };

  return (
    <div>
      <Display value={count}/>
      <Controls change={changeCount}/>
      <button className="btn-type">{props.type}</button>
    </div>
  )
}

export default Panel
