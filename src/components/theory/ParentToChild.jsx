import { useState } from "react";

function Parent(){
    const [text,setText] = useState("");
    
    return(
        <>
            <hr />
            <Child value={text} onChange={e => setText(e.target.value)}></Child>
            <code>{text}</code>
            <hr />
        </>
    )
}
// L'enfant rappelle la fonction setText du parent pour mettre à jour la valeur de l'input
function Child(props){
    
    return(
        <>
            I am child !
            <input value={props.value} onChange={props.onChange} />
        </>
    )
}

/**
 * Est considéré comme un parent, le composant qui appelle un autre composant.
 */
function ParentToChild(){
    return(
        <fieldset>
            <Parent></Parent>
        </fieldset>
    )
}

export default ParentToChild;