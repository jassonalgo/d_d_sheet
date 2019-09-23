/**
 * archivo que arma el header de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import Menu from '../Menu/Menu'
import Character from '../Character/Character'

class Header extends Component {
  render () {
    return (
      <>
        <div> aca header de mesa de rol d&d</div>
        <Menu />
        <Character />
      </>
    )
  }
}

export default connect(null, null)(Header)
