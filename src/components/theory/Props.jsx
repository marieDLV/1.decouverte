
/**
 * Tout composant React peut capturer les propriétés transmises.
 * Toutefois ces propriétés sont en lecture seule.
 */
function PropsReceiver(props){

    console.table(props);
    // props.a = "false"; // Erreur

    return(
        <>
            {props.a} - {props.children}
        </>
    )
}

/**
 * On appelle "props" les propriétés que l'on passe à un composant.
 * Soit sous forme de texte, soit sous forme de variable.
 * Et soit sous forme d'attribut HTML ou de contenu HTML.
 */
function Props(){

    const cValue = [];

    return(
        <>
            <PropsReceiver a="true" b={true} c={cValue} d="[]" e>
                 Contenu passé. 
            </PropsReceiver>
        </>
    )
}

export default Props;