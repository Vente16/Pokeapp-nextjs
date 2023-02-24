import { Container } from '@nextui-org/react';

import styles from './styles.module.scss';

const FavoritesEmpty = () => {
  return (
    <Container className={styles.container_favorites}>
      <h1>There is no favorites</h1>
    </Container>
  );
};

export default FavoritesEmpty;
