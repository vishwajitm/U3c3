import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import { useState } from "react";

const Task = () => {
  // const [todo, settodo] = useState;

  // console.log(todo, settodo);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.list}>
      <input type="checkbox" data-cy="task-checkbox"  className={styles.inputbox}/>
      <div data-cy="task-text">ddds</div></div>
      {/* Counter here */}
      <div className={styles.counterdiv}>
      <Counter/>
      <button data-cy="task-remove-button">&#215;</button></div>
    </li>
  );
};

export default Task;
