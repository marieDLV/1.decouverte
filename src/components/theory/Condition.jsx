import { useState } from "react";

/**
 * En JSX les conditions sont gérées de la même manière que dans le JS classique.
 * Uniquement au moyen d'operatuer.
 */
function Condition() {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <hr />
            <button
                onClick={ ()=> setToggle(!toggle) }
            >Toggle { toggle ? 'Open' : 'Close' }</button>
            { toggle && <p>Toggle is Open</p> }
            { !toggle && <p>Toggle is Close</p> }
        </>
    )
}

export default Condition;