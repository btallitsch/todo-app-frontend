import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../todoForm';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import '@testing-library/jest-dom';

test('allows the user to add a todo', () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const titleInput = screen.getByPlaceholderText('Title');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const dueDateInput = screen.getByRole('textbox', { name: /due date/i });
  const categoryInput = screen.getByPlaceholderText('Category');
  const addButton = screen.getByRole('button', { name: /add todo/i });

  fireEvent.change(titleInput, { target: { value: 'Test Todo' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
  fireEvent.change(dueDateInput, { target: { value: '2025-12-31' } });
  fireEvent.change(categoryInput, { target: { value: 'Test Category' } });
  fireEvent.click(addButton);

  expect(titleInput).toHaveValue('');
  expect(descriptionInput).toHaveValue('');
  expect(dueDateInput).toHaveValue('');
  expect(categoryInput).toHaveValue('');
});