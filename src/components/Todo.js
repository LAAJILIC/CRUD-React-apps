import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ tasks, verifyTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const SubmitUpdate = value => {
         updateTodo(edit.id, value);
         setEdit({
             id: null, 
             value: ''
         });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={SubmitUpdate} />;
    }

  return tasks.map((todo, index) => (
       <div className='todo-row' key={index}>
          <div key={todo.id} onClick={() => verifyTodo(todo.id)}>
          {todo.text}
          </div>

          <div className='icons'>
           <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
           <TiEdit onClick={() => setEdit({
               id: todo.id, value: todo.text
           })} className='edit-icon' />
          </div>
       </div>
    
    ))
  
}

export default Todo;