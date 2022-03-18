import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput]= useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
     
        props.onSubmit({
            //generate a random id 
            id: Math.floor(Math.random() * 1000 ),
            text: input
        });
        setInput('');
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ? (
        <>
        <input type='text' 
        placeholder='Edit the task'
        value={input}
        className='todo-task edit'
        onChange={handleChange}
        ref={inputRef}>
        </input>    
            <button className='todo-button edit' onSubmit={handleSubmit} >Update</button>
            </> )
    :
    (
    <>
    <input type='text' 
    placeholder='Enter the todo task'
    value={input}
    className='todo-task'
    onChange={handleChange}
    ref={inputRef}>
    </input>    
        <button className='todo-button' onSubmit={handleSubmit} >Add Task</button>
        </>
    )}
    </form>
  )
}

export default TodoForm;