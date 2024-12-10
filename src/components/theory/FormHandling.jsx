import { useState } from "react";

/**
 * Le controle de formulaire est une combinaison de "state" et "event" dans react
 */
function FormHandling() {
  const [text, setText] = useState('');

    return (
      <fieldset>
        <legend>Form Handling</legend>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <p>Text: {text}</p>
      </fieldset>
    );
  }
/**
  function FormHandlingWithValidation() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
      if(event.target.value.length <= 10){
        setText(event.target.value);
      } else {
        alert('La longueur maximale est de 10 caractères');
      }
      
  
      return (
        <fieldset>
          <legend>Form Handling</legend>
          <input value={text} onChange={handleChange} />
          <p>Text: {text}</p>
        </fieldset>
      );
    }
  */
  export default FormHandling;