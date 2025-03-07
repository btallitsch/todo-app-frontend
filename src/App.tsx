import React from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl md:text-5xl">
        Todo App
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;