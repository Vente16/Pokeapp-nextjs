import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Pokemon } from '@/interfaces/pokemons';
import { useRouter } from 'next/router';

interface Props {
  id?: string;
  image?: string;
  name: string;
  url: string;
}

const PokemonCard = ({ id, image = '', name, url }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={8} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="uppercase">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
