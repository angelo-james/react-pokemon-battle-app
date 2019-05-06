import {
  SET_TEAM,
  SET_POKEMON
} from '../actions/types';

const INITIAL_STATE = {
  team: [],
  pokemonm: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEAM:
      const { team } = action;
      return { ...state, team };

    case SET_POKEMON:
      const pokemon = action.pokemon;
      return { ...state, pokemon };

    default:
      return state;
  }
}