/**
 * archivo que arma los items de menu de la aplicacion
 * @author jasson algo
 */

import { Component } from 'react'

export class MenuItem extends Component {
  render () {
    const { name, onclick, position } = this.props
    return (
      <a
        onClick={() =>
          onclick(position)}
        href='#'
      > {name}
      </a>
    )
  }
}

export default MenuItem
