import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import pokeApi from '@/config/api';
import { PokemonDetailI, PokemonListData } from '@/interfaces/pokemons';
import PokemonDetail from '@/components/pokemons/PokemonDetail';
import { formatDataPokemon } from '@/utils/pokemonsUtils';

interface Props {
  pokemon: PokemonDetailI;
}

const PokemonDetailByName: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={`Pokemon - ${pokemon.name}`}>
      <PokemonDetail pokemon={pokemon} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListData>('/pokemon?limit=151');
  const { results } = data;
  const pokemons151 = results.map(({ name }) => ({ params: { name } }));

  return {
    paths: pokemons151,
    fallback: 'blocking',
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const convertName = name.toLowerCase();
  let pokemon = null;
  
  try {
    const { data } = await pokeApi.get<PokemonDetailI>(`/pokemon/${convertName}`);
    pokemon = formatDataPokemon(data);
  } catch (error) {
    // TODO: do something
  }

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    // Passed to the page component as props
    props: { pokemon },
    revalidate: 86400
  };
};

export default PokemonDetailByName;
