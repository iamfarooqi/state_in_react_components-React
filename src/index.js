import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Room(){
  const [value, setValue] = React.useState(true);

function Switch(){
  setValue((previous) => !previous)
}

  return(
    <div id={"bground"} className={(value===true)? "Bright" : "Dark"}>
      <div id={"text"}>The Room is {(value === true)? "Bright":"Dark"}</div>
      <button onClick={Switch}>Change</button>
    </div>
  )
}

ReactDOM.render(<Room />,document.getElementById("root"));

