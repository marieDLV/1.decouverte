import { useState } from "react";

/**
 * Le contrôle de formulaire est un combinaison 
 * de "State" et "Event" dans React.
 */
function FormHandling() {

    const [text, setText] = useState('Demo');

    return (
        <fieldset>
            <legend>Form Handling</legend>

            <input value={text} onChange={(event) => setText(event.target.value)} />

            <p>Text: {text}</p>
        </fieldset>
    )
}

function FormHandlingWithValidation() {

    const [text, setText] = useState('Demo');

    const handleChange = (event) => {
        // Logique de validation
        if (event.target.value.length <= 5) {
            setText(event.target.value);
        }else{
            alert('Text length should be less than 5');
        }
    }

    return (
        <fieldset>
            <legend>Form Handling</legend>

            <input value={text} onChange={handleChange} />

            <p>Text: {text}</p>
        </fieldset>
    )
}

export default FormHandlingWithValidation;