import { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import MainLayout from '@/components/layouts/MainLayout';
import pokeApi from '@/config/api';
import { Pokemon, PokemonListData } from '@/interfaces/pokemons';
import PokemonList from '@/components/pokemons/PokemonList';

interface Props {
  pokemons: Pokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout>
      <Image
        src="/images/banner_pokeapp.png"
        height={100}
        width={100}
        alt={''}
      />
      <PokemonList pokemons={pokemons} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListData>('/pokemon?limit=151');
  const { results } = data;
  const pokemons = results.map((pokemon, i) => ({
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    ...pokemon,
  })) as Pokemon[];

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
