import { Button } from '@mantine/core';

interface MyButtonProps {
  label: string;
  onClick?: () => void; // Добавляем onClick как необязательный пропс
}

export const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};
