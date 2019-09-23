/**
 * archivo encargado de manejar los posibles estados referentes a personajes
 * @author jasson algo
 */

import { ADD_CHARACTER, ADD_CHARACTER_ERROR, CURRENT_PLAYER } from './character.constrants'
import axios from 'axios'

/**
 *
 */
export function addCharacterAction (url) {
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
    }).then(resp => {
      dispatch({ type: ADD_CHARACTER, payload: resp.data.data })
      return { statuscode: true }
    }).catch(err => {
      dispatch({ type: ADD_CHARACTER_ERROR, payload: err.data })
      return { statuscode: false }
    })
  }
}

export function updateCurrentPlayer (player) {
  return (dispatch) => {
    console.log('en action')
    dispatch({ type: CURRENT_PLAYER, payload: player })
    return true
  }
}
