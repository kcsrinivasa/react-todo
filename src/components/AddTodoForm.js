import {useState,useEffect, useRef} from 'react'

function AddTodoForm({addTodo}) {
    const [inputText, setInputText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

/** submit the task data */
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo({
            id: Date.now(),
            text:inputText
        })
        setInputText('');
    }

    const handleChange = (e) =>{
        setInputText(e.target.value);
    }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Add todo' value={inputText} onChange={handleChange} ref={inputRef} autoComplete='off'  name="inputText" className='todo-input' />
        <button className='todo-button'>Add</button>
    </form>
  )
}

export default AddTodoForm