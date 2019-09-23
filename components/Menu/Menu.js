/**
 * archivo que arma el menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from './MenuItem'
import {updateCurrentPlayer} from '../../redux/characters/character.actions'

class Menu extends Component {

  getCharacters = (position) =>{
    const { players, updateCurrentPlayerProp } = this.props
    let urlPlayercharacters = players.players[position].name
    updateCurrentPlayerProp(urlPlayercharacters)
    console.log('aca', urlPlayercharacters)
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
    players: state.players
  }
}

function mapDispatchToProps (dispatch) {
  console.log('en mapdispatch')
  return {
    updateCurrentPlayerProp: (player) => {
      console.log('en otro mapdispatch')
      dispatch(updateCurrentPlayer(player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
