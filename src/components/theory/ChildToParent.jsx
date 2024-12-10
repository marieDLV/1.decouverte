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


function ChildToParent(){
    return(
        <>
            <Parent></Parent>
        </>
    )
}

export default ChildToParent;