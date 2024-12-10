import React from "react";
 
/**
 * 
 */
class ComponentWithStateByDefault extends React.Component {
 
  count = 0;

  increment(){
      this.count++;
      console.log(this.count);
      this.setState({});
  }

  render(){
      return(
          <>
              <button onClick={ () => this.increment() }>{this.count}</button>
          </>
      )
  }
}

function ComponentState() {
  const [count /* getter */, setCount /* setter */] = React.useState(0 /* Valeur initiale */);  // HOOK (Crochet) d'état de rendu

    return (
      <>
        <button onClick={ () => setCount(count+1) }>{ count }</button>
      </>
    );
  }
  
  export default ComponentState;