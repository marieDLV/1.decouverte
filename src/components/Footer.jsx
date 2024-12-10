import React from 'react'

/**
 * Ici c'est une déclaration de module avec une classe
 * Ce n'est pas la méthode recommandée pour déclarer un composant
 */
class Footer extends React.Component {
  // Ici on déclare un constructeur pour initialiser les propriétés, props
  /*
    constructor(props) {
      super(props);
    } 
  */

    render() {
      return (
        <footer>
          Application Footer
        </footer>
      )
    }
  }
export default Footer