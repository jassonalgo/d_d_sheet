/**
 * archivo que arma los items de menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'

export class MenuItem extends Component {
  render () {
    const { name } = this.props
    return (
      <li>{name}</li>
    )
  }
}

export default MenuItem
