import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import pokeApi from '@/config/api';
import { PokemonDetailI } from '@/interfaces/pokemons';
import PokemonDetail from '@/components/pokemons/PokemonDetail';
import { formatDataPokemon } from '@/utils/pokemonsUtils';

interface Props {
  pokemon: PokemonDetailI;
}

const PokemonDetailById: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={`Pokemon - ${pokemon.name}`}>
      <PokemonDetail pokemon={pokemon} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = Array(151)
    .fill(null)
    .map((_, index) => ({ params: { id: `${index + 1}` } }));

  return {
    paths: pokemons151 /*pokemons151.map((id) => ({ params: { id } })) */,
    fallback: 'blocking', // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string | number };
  let pokemon = null;
  try {
    const { data } = await pokeApi.get<PokemonDetailI>(`/pokemon/${id}`);
    pokemon = formatDataPokemon(data);
  } catch(e) {
     
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

export default PokemonDetailById;
