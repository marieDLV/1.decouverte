import { useState } from "react";

function Parent(){
    const [text,setText] = useState("");
    
    return(
        <>
            <Child value={text} onChange={e => setText(e.target.value)}></Child>
            <code>{text}</code>
        </>
    )
}

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
        <>
            <Parent></Parent>
        </>
    )
}

export default ParentToChild;