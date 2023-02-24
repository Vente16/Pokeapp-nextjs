import { Grid } from '@nextui-org/react';
import { Pokemon } from '@/interfaces/pokemons';
import PokemonCard from '../PokemonItem';

interface Props {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} justify="center" css={{ padding: 16 }}>
      {pokemons.map((pokemon) => (
        <PokemonCard {...pokemon} key={pokemon.id} />
      ))}
    </Grid.Container>
  );
};

export default PokemonList;
