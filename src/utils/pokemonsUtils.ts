import { PokemonDetailI } from '@/interfaces/pokemons';
import { getItemLocalStorage, setItemLocalStorage } from './localStorageUtils';

export const isPokemonInFavorites = (pokemonId: number): boolean => {
  const favorites = getItemLocalStorage('favorites') || [];
  return favorites.includes(pokemonId);
};

export const addPokemonToFavorites = (pokemonId: number) => {
  const pokemonExits = isPokemonInFavorites(pokemonId);
  if (!pokemonExits) {
    const favorites = getItemLocalStorage('favorites') || [];
    const newFavorites = [...favorites, pokemonId];
    setItemLocalStorage('favorites', newFavorites);
  }
};

export const removePokemonFromFavorites = (pokemonId: number) => {
  const favorites = getItemLocalStorage('favorites') || [];
  const newFavorites = favorites.filter((id: number) => id !== pokemonId);
  setItemLocalStorage('favorites', newFavorites);
};

export const formatDataPokemon = ({ id, name, sprites }: PokemonDetailI) => ({
  id,
  name,
  sprites,
});
