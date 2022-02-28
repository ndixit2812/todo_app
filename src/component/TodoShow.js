import React, {useState} from 'react';
import './TodoShow.css';
import TodoLists from './TodoLists';

const TodoShow = () => {


const [inputList, setInputList] = useState("");
const [items, setItems] = useState([]);

const itemChange =(e) => {
    setInputList(e.target.value);
}; 

const addItem = () => {
    setItems((oldItems) => {
        return [...oldItems, inputList];
    });
    setInputList('');
}

const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
                return index !== id;
        })
    })
}

    return (
        <>
            <div className='main_div'>
                <div className='child_div'>
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type='text' placeholder='Add a item' value={inputList} onChange={itemChange}/>
                    <button onClick={addItem}> + </button>

                    <ol>
                        
                        {
                            items.map((currElem, index) => {
                                return(
                                    <TodoLists 
                                    text={currElem} 
                                    id={index} 
                                    key={index}
                                    onSelect={deleteItems}
                                    />
                                )
                                     
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoShow
