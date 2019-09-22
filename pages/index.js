import React from 'react'
import { connect } from 'react-redux'
import { showPlayersAction } from '../redux/players/players.actions'

class Index extends React.Component {
  static async getInitialProps ({ query, reduxStore }) {
    await reduxStore.dispatch(showPlayersAction())
    const statusCode = 200

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
