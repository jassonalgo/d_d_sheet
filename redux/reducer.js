/**
 * archivo encargado de armar el estado de la aplicacion
 * @author jassonalgo
 */

import { combineReducers } from 'redux'
import { playersState } from './players/players.reducer'
import { charactersState } from './characters/character.reducer'

// se combinan reducers
const rootReducer = combineReducers({
  players: playersState,
  charactersList: charactersState
})

export default rootReducer
