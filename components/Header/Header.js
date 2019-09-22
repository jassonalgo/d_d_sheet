/**
 * archivo que arma el header de la aplicacion
 * @author jasson algo
 */

import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Menu from '../Menu/Menu'

class Header extends Component {
  render () {
    return (
      <>
        <div> aca header</div>
        <Menu />
      </>
    )
  }
}

export default connect(null, null)(Header)
