import {useState} from 'react'
import EditTodoForm from './EditTodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function TodoList({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({ id:null, value:'' });

/** set the update todo details */
    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({ id:null,  value:'' })
    }

/** show edit form */
    if(edit.id){
        return <EditTodoForm editTodo={edit} submitUpdate={submitUpdate} />
    }
/** return todo list */
  return todos.map((todo, index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete-icon' />
            <TiEdit onClick={()=>setEdit({id:todo.id, value:todo.text})} className='edit-icon' />
        </div>

    </div>
  ))
}

export default TodoList