import {
  SELECT_POKEMON,
  SET_TEAM,
  SET_POKEMON
} from './types';

export const selectPokemon = (id, poekmon_data, is_selected) => {
  return {
    type: SELECT_POKEMON,
    id,
    poekmon_data,
    is_selected
  }
};

export const setPokemon = pokemon => {
  return {
    type: SET_POKEMON,
    pokemon
  }
};

export const setTeam = team => {
  return {
    type: SET_TEAM,
    team
  }
};