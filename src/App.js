import React from 'react';
import './App.css';
import TodoListInput from './components/TodoListInput';
import TodoList from './components/TodoList';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListInput>
          </TodoListInput>
          <TodoList>
          </TodoList>
      </header>
    </div>
  );
}
export default App;
