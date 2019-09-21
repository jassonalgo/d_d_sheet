/**
 * archivo que arma el header de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render () {
    return (
      <div> aca header</div>
    )
  }
}

export default connect(null, null)(Header)
