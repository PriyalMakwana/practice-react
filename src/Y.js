import React, { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css'
import { CloseButton} from 'react-bootstrap';

export default function Y() {
   
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, input]);
    setInput('')
  }, [input]);

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const deleteTodo = (index) => {
    const deleteTodos = todos.filter((_, i) => i !== index);
    setTodos(deleteTodos);
  };

  return (
    <>
    <h1 className='text-center'>TODO-LIST</h1>
      <div className='offset-3'>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder="enter your task" value={input} className='w-50'/>
        <button onClick={addTodo} className='btn btn-primary mx-1'>Add Todo</button>
        <button onClick={deleteAllTodo} className='btn btn-danger'>Delete</button>
        </div>
        {
          todos.map((todo, index) => {
        return(
        <div key={index} className='w-50 offset-3 mt-2'> 
        <InputGroup className="mb-3">
        <i className="fa-solid fa-heart mt-2 mx-1"></i>
        <Form.Control aria-label="Text input with checkbox" value={todo} />
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <CloseButton aria-label="Hide" className='deleteBox mt-2' onClick={() => deleteTodo(index)}/>
      </InputGroup>     
      </div>
        )
      })} 
      
    </>
  );
};
