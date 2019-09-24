/**
 * archivo que arma el header de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import Menu from '../Menu/Menu'
import Character from '../Character/Character'
import { Link } from '../../routes'

class Header extends Component {
  render () {
    return (
      <>
        <Link route='index'>
          <a> aca header de mesa de rol d&d</a>
        </Link>
        <Menu />
        <Character />
      </>
    )
  }
}

export default connect(null, null)(Header)
