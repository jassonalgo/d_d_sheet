import React from 'react'
import { connect } from 'react-redux'
import { PLAYERS_PATH } from '../config/config'
import axios from 'axios'

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    // res is assigned the response once the axios
    // async get is completed
    const url = PLAYERS_PATH
    const test = await axios.get(url).then(resp => {
      // se dispara redux al obtener data del servicio
      console.log('funciona', resp.data)
      return { data: resp.data }
    }).catch(err => {
      // se dispara redux en caso de no poder obtener la informacion del beneficio
      console.log('no funciona', err)
      return { data: err }
    })
    // Return properties
    return { data: test }
  }

  render () {
    console.log('valorde props', this.props)
    return (
      <div>acaaa</div>
    )
  }
}

export default connect(
  null,
  null
)(Index)
