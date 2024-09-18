import { Card, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { mockData } from '@/utils/mock';
import MyCard from './Card';
import styles from './Card.module.css';

const Cards = () => {
  return (
    <SimpleGrid
      className={styles.simpleGrid}
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 'md', sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {mockData.map((data, index) => (
        <MyCard
          key={index}
          thumbnail={data.thumbnail}
          title={data.title}
          description={data.description}
        />
      ))}
    </SimpleGrid>
  );
};

export default Cards;
