import React from 'react'
import { connect } from 'react-redux'

class Player extends React.Component {
  static getInitialProps ({ query }) {
    return { query }
  }

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  render () {
    const { query, charactersList } = this.props
    let currentPlayer = {}
    let currentCharacter = {}
    
    // se valida que juigador sea valido
    if (!charactersList.characters.hasOwnProperty(this.capitalize(query.player))) {
      return (
        <div className='aca'>jugador no valido</div>
      )
    }

    //se valida que jugador y personaje sea valido
    if (!charactersList.characters.hasOwnProperty(this.capitalize(query.player)) &&
    !charactersList.characters[query.player].hasOwnProperty(this.capitalize(query.character))) {
      return (
        <div className='aca'>personaje no valido</div>
      )
    }

    currentPlayer = charactersList.characters[this.capitalize(query.player)]
    currentCharacter = currentPlayer.characters[0]
    let currentCharacterSkills = currentCharacter.skills
    console.log(currentCharacter)
    return (
      <>
      <div className='aca'>propietario: {currentPlayer.userName}</div>
      <div className='aca'>nombre: {currentCharacter.name}</div>
      <div className='aca'>pg: {currentCharacter.hitPoint}</div>
      <div className='aca'>clase: {currentCharacter.info.class}</div>
      <div className='aca'>raza: {currentCharacter.info.race}</div>
      <div className='aca'>alineamiento: {currentCharacter.info.Alineamiento}</div>
      <div className='aca'>fuerza: {currentCharacter.characteristics.strength}</div>
      <div className='aca'>destreza: {currentCharacter.characteristics.dexterity}</div>
      <div className='aca'>constitucion: {currentCharacter.characteristics.constitution}</div>
      <div className='aca'>inteligencia: {currentCharacter.characteristics.intelligence}</div>
      <div className='aca'>sabiduria: {currentCharacter.characteristics.wisdom}</div>
      <div className='aca'>carisma: {currentCharacter.characteristics.charisma}</div>
      <div className='aca'>fortaleza: {currentCharacter.salvation.fortitude.base}</div>
      <div className='aca'>reflejos: {currentCharacter.salvation.reflex.base}</div>
      <div className='aca'>voluntad: {currentCharacter.salvation.will.base}</div>
      <div>habilidades</div>
      <div>un uso</div>
      <div className='aca'>nombre: {currentCharacter.skills.oneUse.name}</div>
      <div className='aca'>descripcion: {currentCharacter.skills.oneUse.description}</div>
      <div className='aca'>condicion: {currentCharacter.skills.oneUse.condition}</div>
      <div>efectos</div>
      <div className='aca'>nombre: {currentCharacter.skills.oneUse[0].effects[0].name}</div>
      <div className='aca'>descripcion: {currentCharacter.skills.oneUse[0].effects[0].description}</div>
      <div>+</div>
      <div>+</div>
      <div>+</div>
      <div>Tree</div>
      <div className='aca'>nombre: {currentCharacter.skills.tree[0].name}</div>
      <div className='aca'>descripcion: {currentCharacter.skills.tree[0].description}</div>
      <div className='aca'>condicion: {currentCharacter.skills.tree[0].condition}</div>
      <div>lvl1</div>
      <div className='aca'>nombre: {currentCharacter.skills.tree[0].levels[1][0].name}</div>
      <div className='aca'>descripcion: {currentCharacter.skills.tree[0].levels[1][0].description}</div>
      </>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    charactersList: state.charactersList
  }
}
export default connect(
  mapStateToProps,
  null
)(Player)
