import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { fetchTodos } from '../services/api';
import { setTodos, toggleTodo, deleteTodo } from '../features/todoSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        dispatch(setTodos(todos));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    loadTodos();
  }, [dispatch]);

  return (
    <ul className="space-y-2 list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center space-x-4 bg-gray-800 p-3 rounded"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="w-5 h-5"
          />
          
          <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-white'} flex-grow`}>
            {todo.title}
          </span>
          
          {todo.category && (
            <span className="text-sm text-gray-400 px-2 py-1 bg-gray-700 rounded">
              {todo.category}
            </span>
          )}
          
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </li>
      ))}
      
      {todos.length === 0 && (
        <li className="text-center py-4 text-gray-400">
          No todos yet. Add one above!
        </li>
      )}
    </ul>
  );
};

export default TodoList;