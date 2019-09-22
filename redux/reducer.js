/**
 * archivo encargado de armar el estado de la aplicacion
 * @author jassonalgo
 */

import { combineReducers } from 'redux'
import { playersState } from './players/players.reducer'

// se combinan reducers
const rootReducer = combineReducers({
  players: playersState
})

export default rootReducer
