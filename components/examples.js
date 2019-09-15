import { useSelector, shallowEqual } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import { PLAYERS_PATH } from '../config/config'
import { Link } from '../routes'

const clockSelector = state => ({
  lastUpdate: state.lastUpdate,
  light: state.light
})

const playersPaths = PLAYERS_PATH
const dataPlayers = require(`../${playersPaths}`)
console.log(dataPlayers)

function Examples () {
  const { lastUpdate, light } = useSelector(clockSelector, shallowEqual)
  return (
    <div>
      <Link route='player' params={{ player: 'jasson' }}>
        <a>About Page</a>
      </Link>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

export default Examples
