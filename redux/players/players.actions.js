/**
 * archivo encargado de manejar los posibles estados referentes a jugadores
 * @author jasson algo
 */

import { SHOW_PLAYERS, SHOW_PLAYERS_ERROR } from './players.constrants'
import { PLAYERS_PATH } from '../../config/config'
import axios from 'axios'

export function showPlayersAction (query) {
  return (dispatch) => {
    return axios.get(PLAYERS_PATH, {
      headers: {
        Accept: 'application/json'
      }
    }).then(resp => {
      dispatch({ type: SHOW_PLAYERS, payload: resp.data.data })
      return { statuscode: true }
    }).catch(err => {
      dispatch({ type: SHOW_PLAYERS_ERROR, payload: err.data })
      return { statuscode: false }
    })
  }
}
