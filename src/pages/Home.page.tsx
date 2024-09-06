import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

const HomePage = () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
};

export default HomePage;
