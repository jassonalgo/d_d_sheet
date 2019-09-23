/**
 * archivo que arma el menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from './MenuItem'
import {updateCurrentPlayer, addCharacterAction} from '../../redux/characters/character.actions'

class Menu extends Component {

  getCharacters = (position) =>{
    const { players, updateCurrentPlayerProp, charactersList, addCharacter } = this.props
    let playerName = players.players[position].name
    updateCurrentPlayerProp(playerName)
    console.log('aca', playerName)
    //se busca si hay personajes del jugador
    if(!charactersList.characters.hasOwnProperty(playerName)){
      addCharacter(players.players[position].file)
      console.log('no tiene')
    }else{
      console.log('tiene')
    }
  }
  render () {
    const { players } = this.props

    if (players.showPlayers === false) {
      return (
        <div> sin jugadores</div>
      )
    }

    if (players.showPlayers === true && Array.isArray(players.players)) {
      const listItems = players.players.map((element, index) =>
      // Mal! La key debería haber sido especificada aquí:
        <MenuItem name={element.name} key={index} onclick = {this.getCharacters} position={index}/>
      )
      return (
        <div>
          {listItems}

        </div>
      )
    }

    if (players.showPlayersError === true) {
      return (
        <div> error al cargar jugadores</div>
      )
    }
  }
}

function mapStateToProps (state, props) {
  return {
    players: state.players,
    charactersList: state.charactersList
  }
}

function mapDispatchToProps (dispatch) {
  console.log('en mapdispatch')
  return {
    updateCurrentPlayerProp: (player) => {
      console.log('en otro mapdispatch')
      dispatch(updateCurrentPlayer(player))
    },
    addCharacter: (url) => dispatch(addCharacterAction(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
