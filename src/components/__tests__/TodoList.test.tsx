import { render, screen } from '@testing-library/react';
import TodoList from '../todoList';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { addTodo } from '../../features/todoSlice';
import '@testing-library/jest-dom';

test('displays todos correctly', () => {
  store.dispatch(
    addTodo({
      id: '1',
      title: 'Test Todo',
      description: 'Test Description',
      dueDate: '2025-12-31',
      category: 'Test Category',
      completed: false,
    })
  );

  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  expect(screen.getByText('Test Category')).toBeInTheDocument();
});