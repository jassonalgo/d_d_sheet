import { useSelector, shallowEqual } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import { Link } from '../routes'

const clockSelector = state => ({
  lastUpdate: state.lastUpdate,
  light: state.light
})

const dataPlayers = require('../src/json/players.json')
console.log(dataPlayers)

function Examples () {
  const { lastUpdate, light } = useSelector(clockSelector, shallowEqual)
  return (
    <div>
      <Link route='player' params={{ player: 'jasson' }}>
        <a>link</a>
      </Link>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

export default Examples
