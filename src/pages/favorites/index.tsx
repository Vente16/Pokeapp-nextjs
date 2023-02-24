import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { getItemLocalStorage } from '@/utils/localStorageUtils';
import MainLayout from '@/components/layouts/MainLayout';
import FavoritesList from '@/components/favorites/FavoritesList';
import FavoritesEmpty from '@/components/favorites/FavoritesEmpty';

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const getFavorites = getItemLocalStorage('favorites') || [];
    setFavorites(getFavorites);
  }, []);
  return (
    <MainLayout title="Pokeapp  - Favoritos">
      {favorites.length ? (
        <FavoritesList favorites={favorites} />
      ) : (
        <FavoritesEmpty />
      )}
    </MainLayout>
  );
};

export default Favorites;
