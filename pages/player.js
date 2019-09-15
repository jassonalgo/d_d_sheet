import React from 'react'
import { connect } from 'react-redux'

class Player extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return {}
  }

  render () {
    return (
      <div className='aca'>player</div>
    )
  }
}
export default connect(
  null,
  null
)(Player)
