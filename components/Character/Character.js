/**
 * archivo que muestra la informacion correspondiente a personajes
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'

class Character extends Component {
  componentDidUpdate () {
    const { charactersList } = this.props
    if (charactersList.currentPlayer !== '') {

    }
  }

  render () {
    const { charactersList } = this.props

    if (charactersList.currentPlayer !== '') {
      return (
        <div>personajes dispnibles para {charactersList.currentPlayer}</div>
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
