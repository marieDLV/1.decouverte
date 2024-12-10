/**
 * La gestion des events du DOM ne se fait que sur des élement du DOM
 * Cette gestion se fait pvia l'appel fonctions lorsqu'un événement se produit.
 * Ces fonctions sont appelées des gestionnaires d'événements.
 * Une convention est de les préfixer de "handle" suivi du nom de l'événement.
 * L'association se fait la la version camelaCase de l'attribut d'événement. 
 * 
 * @example:
 * 
 * Evenement "click" => attibut HTML standard "onclick"  => En react "onClick"
 * Association <button onClick={handleClick}>Click Here</button>
 */
function Events(){

  const handleClick = (event) => {
      console.log('Button clicked', event);
  }
  
  return(
      <>
          <Component onClick={handleClick}></Component>
          <button onClick={handleClick}>Click Here</button>
      </>
  )
}

// Le bouton suivant ne déclenchera pas l'événement, car se n'est pas un élément du DOM
// Il n'est pas possible d'associer un événement à un composant React.
// Tout ce qui passe en paramètre d'un composant React est transformé en props
const Component = () => <button>Click Here But Nothing will happen</button>

export default Events;