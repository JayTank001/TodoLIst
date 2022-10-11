import React from "react";

const TodoList = (props) => {
    return (
        <>
            <li>
            <button type="button" onClick={() => {props.onSelect(props.id)}}> X </button>
            {props.text}
            </li>
        </>
    )
}

export default TodoList