/**
 * archivo que arma los items de menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'

export class MenuItem extends Component {
  render () {
    const { name, onclick, position } = this.props
    return (
      <span onClick={() =>
        onclick(position)}
      >{name}-
      </span>
    )
  }
}

export default MenuItem
