import {useState} from 'react'
import Modal from 'react-modal';

function EditTodoForm({editTodo, submitUpdate}) {
    const [inputText, setInputText] = useState(editTodo.value);
    const [modalIsOpen , setModalIsOpen] = useState(true);

/** set the modal custom styles */
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#130499',
        },
      };
      Modal.setAppElement('body');
      
/** submit the updated task data */
    const handleSubmit = (e) =>{
        e.preventDefault();
        submitUpdate({
            id: editTodo.id,
            text:inputText
        })
        setModalIsOpen(false);
        setInputText('');
    }

    const handleChange = (e) =>{
        setInputText(e.target.value);
    }


  return (
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
    <div>
        <h2 className='edit-header'>Update Todo</h2>
        <form className='todo-form' onSubmit={handleSubmit}>
          <input type="text" placeholder='Update todo' value={inputText} onChange={handleChange} autoFocus={true} autoComplete='off' name="inputText" className='todo-input edit' />
          <button className='todo-button edit'>Update</button>        
        </form>
    </div>
    </Modal>
  )
}

export default EditTodoForm