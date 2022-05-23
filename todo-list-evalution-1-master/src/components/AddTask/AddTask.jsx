import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [todo, setTodo]=useState("");
  const [todos, setTodos]=useState([]);

  console.log(todos);

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input value={todo} data-cy="add-task-input" type="text" placeholder="Add task..." className={styles.input} onChange={(e) =>{
        setTodo(e.target.value);
      }}/>
      <button data-cy="add-task-button" className={styles.btn} onClick={()=>{
        console.log(todo);
        setTodos([...todos, {id: Date.now(), value: todo}])
        setTodo("");
      }}>&#x2B;</button>
    </div>
  );
};

export default AddTask;
