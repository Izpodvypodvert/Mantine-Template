import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import wait, { POSTS } from '../utils/wait';

const HomePage = () => {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // queryFn: () => Promise.reject('Error Message'),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  if (postQuery.isLoading) return <div>Loading</div>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

  return (
    <>
      <Welcome />
      {postQuery.data?.map((post) => <div key={post.id}>{post.title}</div>)}
      <button
        disabled={newPostMutation.isPending}
        onClick={() => newPostMutation.mutate('New post')}
      >
        Add new post
      </button>
      {/* <ColorSchemeToggle />
      <Welcome />
      <Welcome />
      <Welcome /> */}
    </>
  );
};

export default HomePage;
