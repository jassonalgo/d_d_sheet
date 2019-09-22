/**
 * archivo encargado de manejar el estado referente a jugadores
 * @author jasson algo
 */

import { SHOW_PLAYERS, SHOW_PLAYERS_ERROR } from './players.constrants'

// estado inical para jugadores
const playerinitialstate = {
  showPlayers: false,
  players: {},
  showPlayersError: false
}

/**
 *
 * @param {Object} state estado de la aplicacion
 * @param {String} action accion para actualizar el estado
 */
export function playersState (state = playerinitialstate, action) {
  const payload = action.payload

  switch (action.type) {
    // ver lista de jugadores
    case SHOW_PLAYERS:

      // Copia el estado actual de la aplicación y le asigna los nuevos valores
      return Object.assign({}, state, {
        showPlayers: true,
        players: payload
      })
    // fallo al consultar lista de jugadores
    case SHOW_PLAYERS_ERROR:

      // Copia el estado actual de la aplicación y le asigna los nuevos valores
      return Object.assign({}, state, {
        showPlayersError: true
      })

    default:

      // Retorna el estado inicial de la aplicación
      return state
  }
}
