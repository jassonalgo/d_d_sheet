/**
 * archivo que arma el menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from './MenuItem'

class Menu extends Component {
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
        <MenuItem name={element.name} key={index} />
      )
      return (
        <ul>
          {listItems}

        </ul>
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

export default connect(mapStateToProps, null)(Menu)
