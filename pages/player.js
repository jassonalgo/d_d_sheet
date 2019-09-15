import React from 'react'
import { connect } from 'react-redux'

class Player extends React.Component {
  static getInitialProps ({ query }) {
    return { query }
  }

  render () {
    const { query } = this.props
    console.log(this.props)
    return (
      <div className='aca'>player {query.player}</div>
    )
  }
}
export default connect(
  null,
  null
)(Player)
