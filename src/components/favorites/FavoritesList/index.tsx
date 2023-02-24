import { Grid } from '@nextui-org/react';
import FavoriteItem from './components/FavoriteItem';

interface Props {
  favorites: number[];
}

const FavoritesList = ({ favorites }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((id) => (
        <FavoriteItem pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritesList;
