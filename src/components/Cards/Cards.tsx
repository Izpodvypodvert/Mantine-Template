import { SimpleGrid } from '@mantine/core';
import { mockData } from '@/utils/mock';
import MyCard from './Card';

const Cards = () => {
  return (
    <SimpleGrid
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
