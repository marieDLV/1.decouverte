import React from "react";

/**
 * Un composant sous forme de classe posséde un état de rendu défaut
 * La modification de cet état se fait via la méthode "setState()"
 * Cette modification entraine une mise à jour de l'afichage du composant
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

/**
 * 
 * Un composant fonctionnel peut se RACCROCHER à la mécanique de notification d'état de rendu
 */
function ComponentState(){

    const [count /* getter */, setCount /* setter */] = React.useState(0 /* valeur inititale */); // HOOK (Crochet) d'état de rendu

    return(
        <>
            <button onClick={ () => setCount(count + 1) /* déclenche un rendu */ }>{ count }</button>
        </>
    )
}

export default ComponentState;