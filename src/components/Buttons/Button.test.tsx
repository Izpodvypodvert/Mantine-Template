import React from 'react';
import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import { MyButton } from './Button';

describe('MyButton component', () => {
  it('renders with correct label', () => {
    render(<MyButton label="Click me" />);

    // Проверка, что кнопка отображается с правильным текстом
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('responds to click events', () => {
    const handleClick = vi.fn();
    render(<MyButton label="Click me" onClick={handleClick} />);

    // Выполняем клик по кнопке
    fireEvent.click(screen.getByRole('button'));

    // Проверяем, что функция обработчика была вызвана один раз
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
