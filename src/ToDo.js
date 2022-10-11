import React , { useState } from "react";
import TodoList from "./TodoList";

const ToDo = () => {
    const [inputList , setinputList] = useState("");
    const [items,setitems] = useState([]);
    const itemEvent = (event) =>{
        setinputList(event.target.value)
    }

    const listOfItems = () => {
        setitems((inputVal) => {
            return [...inputVal,inputList]
        });
        setinputList("");
    }

    const deleteItem = (id) => {
        setitems((oldItems) => {
            return oldItems.filter( (arrayEle,index) => {
                return index != id;
            })
        }) 
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <div className="todo_list">
                        <div className="todo_list_input">
                            <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList}/>
                            <button onClick={listOfItems}> Add </button>
                        </div>
                        <ol>
                            {
                                items.map((Value,index) => {
                                  return  <TodoList key={index} id={index} text={Value} onSelect={deleteItem} />
                                }) 
                            }
                            
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo