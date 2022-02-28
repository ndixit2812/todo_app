import React from 'react'

const TodoLists = (props) => {

    
    return (
      <>
         <div className='todo_style'>
           <i className="fa fa-times" aria-hidden="true" 
               onClick={()=> {
                props.onSelect(props.id);
               }}
              />
             <li key={props.key}>{props.text}</li>
        </div>
     </>
    )
}

export default TodoLists
