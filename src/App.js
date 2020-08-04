import React from 'react';
import './App.css';
import TodoListInput from './components/TodoListInput';
import TodoList from './components/TodoList';
import {HashRouter ,Route,Link} from 'react-router-dom';
import FinishTodo from './components/FinishTodo';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <Link to="/">toThis</Link>
          <Link to="/finish">finish</Link> 
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/finish"  exact component={FinishTodo}></Route>
        </HashRouter>
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
