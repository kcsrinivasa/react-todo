import {useState} from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

function Todo() {

    const [todos, setTodos] = useState([]);

/** add new todo task to list */
    const addTodo = (todo) => {
        if(!todo.text){
          alert('Please add text');
          return;
        }
          
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
      }
    
/** delete todo task from the list */
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

/** update the todo task to list */
    const updateTodo = (updateId, updateValue) =>{
      if(!updateValue.text){
        alert('Please update text');
        return;
      }
        
      setTodos(prev => prev.map(item => (item.id === updateId ? updateValue : item )))
    }

/** update the todo task complete status to list */
    const completeTodo = (id) =>{
      let updatedTodos = todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
      setTodos(updatedTodos)
    }

/** show add todo form and todo list */
  return (
    <div>
        <h1 className='header'>What's the Plan on your Mind ?</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default Todo