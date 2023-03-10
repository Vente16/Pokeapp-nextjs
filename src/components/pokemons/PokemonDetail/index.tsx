import { useEffect, useState } from "react";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { PokemonDetailI } from "@/interfaces/pokemons";
import {
  addPokemonToFavorites,
  isPokemonInFavorites,
  removePokemonFromFavorites,
} from "@/utils/pokemonsUtils";

import styles from './styles.module.scss';

interface Props {
  pokemon: PokemonDetailI;
}

const spritesSize = 100;

const PokemonDetail = ({ pokemon }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      removePokemonFromFavorites(pokemon.id);
    } else {
      addPokemonToFavorites(pokemon.id);
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
    const checkPokemon = isPokemonInFavorites(pokemon.id);
    setIsFavorite(checkPokemon);
  };

  useEffect(() => {
    const checkIsFavorite = isPokemonInFavorites(pokemon.id);
    setIsFavorite(checkIsFavorite);
  }, [pokemon.id]);

  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || ""}
              alt={pokemon.name}
              width="100%"
              height={200}
            ></Card.Image>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            className={styles.header_card}
          >
            <Text h1 transform="uppercase">
              {pokemon.name}
            </Text>

            <Button
              color={isFavorite ? "error" : "gradient"}
              onPress={toggleFavorite}
            >
              {isFavorite ? "Remove from favorites" : "Save as a favorite"}
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction="row" display="flex">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                height={spritesSize}
                width={spritesSize}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                height={spritesSize}
                width={spritesSize}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                height={spritesSize}
                width={spritesSize}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                height={spritesSize}
                width={spritesSize}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default PokemonDetail;
