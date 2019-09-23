/**
 * archivo encargado de manejar el estado referente a personajes
 * @author jasson algo
 */

import { ADD_CHARACTER, ADD_CHARACTER_ERROR, CURRENT_PLAYER } from './character.constrants'

// estado inical para Personajes
const charactersInitialstate = {
  characters: {},
  getCharactersError: false,
  currentPlayer: ''
}

/**
 *
 * @param {Object} state estado de la aplicacion
 * @param {String} action accion para actualizar el estado
 */
export function charactersState (state = charactersInitialstate, action) {
  const payload = action.payload
  const newCharacters = []

  switch (action.type) {
    // agregar personajes
    case ADD_CHARACTER:

      newCharacters.characters = Object.assign({}, state.characters, {
        ...payload
      })

      // Copia el estado actual de la aplicación y le asigna los nuevos valores
      return Object.assign({}, state, {
        getCharactersError: false,
        ...newCharacters
      })
    // fallo al consultar lista de personajes pro jugador
    case ADD_CHARACTER_ERROR:

      // Copia el estado actual de la aplicación y le asigna los nuevos valores
      return Object.assign({}, state, {
        getCharactersError: true
      })

    case CURRENT_PLAYER:
      console.log('en reducer')
      // Copia el estado actual de la aplicación y le asigna los nuevos valores
      return Object.assign({}, state, {
        currentPlayer: payload
      })
    default:

      // Retorna el estado inicial de la aplicación
      return state
  }
}
