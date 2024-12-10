import { useState } from "react";

function Condition() {
  const [ toggle, setToggle ] = useState(false);

    return (
      <>
      <hr />
      <button onClick={() => setToggle(!toggle)}> Toggle { toggle ? 'Open':'Close'}</button>
      /* Il n'y a pas de "if" en JSX, on utilise l'opérateur ternaire */
      {toggle && <p>Toggle is Open</p>}
      {!toggle && <p>Toggle is Close</p>}
      </>
    );
  }
  
  export default Condition;