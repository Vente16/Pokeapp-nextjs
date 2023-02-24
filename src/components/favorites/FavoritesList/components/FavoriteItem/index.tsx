import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

import styles from './styles.module.scss';

interface Props {
  pokemonId: number;
}

const FavoriteItem = ({ pokemonId }: Props) => {
  const router = useRouter();
  const handleClickFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  const favoriteImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  return (
    <Grid xs={6} sm={3} xl={1} onClick={handleClickFavorite}>
      <Card isHoverable isPressable className={styles.card_item}>
        <Card.Image src={favoriteImage} className={styles.image}></Card.Image>
      </Card>
    </Grid>
  );
};

export default FavoriteItem;
