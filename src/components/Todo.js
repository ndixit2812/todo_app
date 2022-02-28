import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if(!inputData){
          alert('plzz fill the data');
        }else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if(elem.id === isEditItem) {
                        return {...elem, name: inputData}
                    }
                    return elem;
                })
               
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        }
        else{
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }

    }

    const deleteItem =(index) => {
          const updatedItems = items.filter((elem) => {
              return index !== elem.id; 
          });
          setItems(updatedItems);
    }

    const editItem = (id) => {
         let newEditItem = items.find((elem) => {
             return elem.id === id;
         });
         setToggleSubmit(false);
         setInputData(newEditItem.name);
         setIsEditItem(id);
    }

    const removeAll =() => {
        setItems([]);
    }
    return (
        <>
            < div className='main_div'>
                <div className='child_div'>
                    <figure>
                        <img src="../images/todo.jpg" alt="todo_image"  /> 
                        <figcaption>Add your list here✌️</figcaption>       
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder="✍️ Add Items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        
                        {
                          toggleSubmit ? <i className="fa-solid fa-plus add-btn" aria-hidden="true"  title='Add Items' onClick={addItem}></i> :
                          <i className="fa-solid fa-pen-to-square updated-btn" title='update Item' onClick={addItem} ></i>

                        }
                        
                        
                        
                        {/* <i class="fas fa-plus"></i> */}
               </div>

               <div className='showItems'>
                  
                   {
                      items.map((currElem) => {
                          return(
                            <div className='eachItems' key={currElem.id}>
                                <h3 className='todo_item'>{currElem.name}</h3>
                                <div className='todo_btn'>
                                <i class="fa-solid fa-pen-to-square update-btn" title='edit Item' onClick={() => editItem(currElem.id)}></i>
                                <i class="fa-solid fa-trash-can delete-btn" title='delete Item' onClick={() => deleteItem(currElem.id)}></i>
                                </div>
                            </div>
                          )
                      }) 
                   }
                   
               </div>

               <div className='showItems'>
                   <button className='btn_effect' onClick={removeAll}>REMOVE ALL </button>
               </div>
                </div>
            </div>
        </>
    )
}

export default Todo
