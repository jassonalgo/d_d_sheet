import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Component, Fragment } from 'react'

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
}

export default Layout
