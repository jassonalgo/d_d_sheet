/**
 * archivo encargado de manejar los posibles estados referentes a jugadores
 * @author jasson algo
 */

import { SHOW_PLAYERS, SHOW_PLAYERS_ERROR } from './players.constrants'
import { PLAYERS_PATH } from '../../config/config'
import axios from 'axios'

export function showPlayers () {
  return (dispatch) => {
    return axios.get(PLAYERS_PATH, {
      headers: {
        Accept: 'application/json'
      }
    }).then(resp => {
      dispatch({ TYPE: SHOW_PLAYERS, payload: resp })
      return { statuscode: true }
    }).catch(err => {
      dispatch({ TYPE: SHOW_PLAYERS_ERROR, payload: err })
      return { statuscode: false }
    })
  }
}
