import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export const useToggleColorScheme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };
  return { computedColorScheme, toggleColorScheme };
};
