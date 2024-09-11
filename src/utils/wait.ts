const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

export const POSTS = [
  {
    id: crypto.randomUUID(),
    title: 'Post 1',
  },
  { id: crypto.randomUUID(), title: 'Post 2' },
];

export default wait;
