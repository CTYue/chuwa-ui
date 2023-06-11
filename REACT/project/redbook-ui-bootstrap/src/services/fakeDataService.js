import { faker } from '@faker-js/faker';

export const getRandomData = () => {
  const randomId = Math.floor(Math.random() * 1000);
  const image = `https://picsum.photos/id/${randomId}/1500/1000`;

  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    image,
  };
};
