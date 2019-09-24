/**
 * archivo que muestra la informacion correspondiente a personajes
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from '../../routes'

class Character extends Component {

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  
  render () {
    let characters = ''
    const { charactersList } = this.props
    if (charactersList.currentPlayer !== '') {
      console.log('player')
      if (charactersList.characters.hasOwnProperty(this.capitalize(charactersList.currentPlayer))) {
        const current = charactersList.currentPlayer
        characters = charactersList.characters[this.capitalize(current)].characters[0].name
        console.log('redner personajes', characters)
      }
    }
    if (charactersList.currentPlayer !== '' && charactersList.characters.hasOwnProperty(this.capitalize(charactersList.currentPlayer))) {
      return (
        <>
        <div>personajes dispnibles para {charactersList.currentPlayer} </div>
        <Link route='character' params={{ player:charactersList.currentPlayer, character:characters }}>
          <a>          
            {characters}
          </a>
        </Link>
        </>
      )
    }

    if (charactersList.getCharactersError === true) {
      return (
        <div> error al cargar personajes</div>
      )
    }
    return (
      <div> sin datos de personaje</div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    charactersList: state.charactersList
  }
}

export default connect(mapStateToProps, null)(Character)
