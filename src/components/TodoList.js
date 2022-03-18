import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = task => {
    if (!task.text || /^\s*$/.test(task.text)) return;
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    };


    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    const deleteTodo = id => {
        const removeTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(removeTodos);
    }
    const completeTodo = id => {
        let verifiedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(verifiedTodos);
    } // to verify if there is a duplication, if the same task has 2 id for example so change its status(isComplete)
      return (
    <div>
       <h1>Any plans for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo tasks={todos} verifyTodo={completeTodo} removeTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList