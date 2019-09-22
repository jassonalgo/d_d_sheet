import React from 'react'
import { connect } from 'react-redux'
import { showPlayersAction } from '../redux/players/players.actions'

class Index extends React.Component {
  static async getInitialProps ({ query, reduxStore }) {
    await reduxStore.dispatch(showPlayersAction(query))
    const statusCode = 200
    // console.log('valro de query', query)
    // console.log('valro de store', reduxStore)
    // const { getPlayers } = this.props
    // res is assigned the response once the axios
    // async get is completed
    // const url = PLAYERS_PATH
    // const test = await axios.get(url).then(resp => {
    //   // se dispara redux al obtener data del servicio
    //   // console.log('funciona', resp.data)
    //   return { data: resp.data }
    // }).catch(err => {
    //   // se dispara redux en caso de no poder obtener la informacion del beneficio
    //   // console.log('no funciona', err)
    //   return { data: err }
    // })
    // Return properties
    // await getPlayers()
    return { query, statusCode }
  }

  render () {
    return (
      <div>aca cuerpo</div>
    )
  }
}

export default connect(
  null,
  null
)(Index)
