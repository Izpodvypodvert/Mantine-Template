import { Card, Group, Image, Text, Title } from '@mantine/core';
import classes from './Card.module.css';

interface MyCardProps {
  thumbnail: string;
  title: string;
  description: string;
}

const MyCard: React.FC<MyCardProps> = ({ thumbnail, title, description }) => {
  return (
    <Card shadow="sm" padding="lg" className={classes.card}>
      <Card.Section>
        <Image src={thumbnail} height={200} alt={title} />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Title>{title}</Title>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default MyCard;
