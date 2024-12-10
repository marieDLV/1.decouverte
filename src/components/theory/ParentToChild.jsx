function Parent(){
    return(
        <>
            <Child></Child>
            <Child></Child>
            <Child></Child>
        </>
    )
}

function Child(){
    return(
        <>
            I am child !
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