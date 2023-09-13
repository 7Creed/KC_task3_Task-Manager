import { useState, useRef } from "react";

import { todoObj, inProgress, completedData } from "./data/data";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Completed from "./Completed";

const Body = () => {
  let cleared = { title: "", desc: "", due_date: "" };
  // const [modalOpen, setModalOpen] = useState(false);
  const [todoModalOpen, setTodoModalOpen] = useState(false);
  const [inProgressModalOpen, setInProgressModalOpen] = useState(false);
  const [completedModalOpen, setCompletedModalOpen] = useState(false);
  const [selectDueDate, setSelectedDueDate] = useState(null);

  const [todoArr, setTodoArr] = useState(todoObj);
  const [inProgressArr, setInProgressArr] = useState(inProgress);
  const [completedArr, setCompletedArr] = useState(completedData);

  const [newTask, setNewTask] = useState(cleared);

  const dueDateRef = useRef(null);

  const isFilled = function () {
    if (newTask.title.trim() === "" || newTask.desc.trim() === "") {
      // to create a warning sign later and don't add tasks with empty title or description
      return;
    }
  };

  const addTaskToCategory = (categoryArray, setCategoryArray, newTask) => {
    setCategoryArray([
      ...categoryArray,
      {
        // id: Math.max(...todoArr.map((task) => task.id), 0) + 1,
        id: categoryArray.length + 1,
        title: newTask.title,
        desc: newTask.desc,
        // due_date: newTask.due_date,
        due_date: dueDateRef.current.value || newTask.due_date,
      },
    ]);
  };

  // to use global context on this soon
  const handleAddTodo = (e) => {
    e.preventDefault();

    isFilled();
    addTaskToCategory(todoArr, setTodoArr, newTask);

    // Clear the input fields
    setNewTask(cleared);

    // Close the modal
    setTodoModalOpen(false);
    console.log(todoArr);
    console.log(dueDateRef.current.value);
  };
  // console.log(dueDateRef.current.value)

  const handleAddInProgress = (e) => {
    e.preventDefault();

    isFilled();

    addTaskToCategory(inProgressArr, setInProgressArr, newTask);

    // Clear the input fields
    setNewTask(cleared);

    // Close the modal
    setInProgressModalOpen(false);
  };

  const handleAddCompleted = (e) => {
    e.preventDefault();

    isFilled();

    addTaskToCategory(completedArr, setCompletedArr, newTask);

    // Clear the input fields
    setNewTask(cleared);

    // Close the modal
    setCompletedModalOpen(false);
  };

  const handleDel = (id, taskArray, setTaskArray) => {
    const updatedTask = taskArray.filter((task) => task.id !== id);
    setTaskArray(updatedTask);
  };

  return (
    <main>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-4 xl:gap-10 bg-[#fcfbfc] px-5 lg:px-6 xl:px-16 pt-8 pb-16">
        <Todo
          todoArr={todoArr}
          modalOpen={todoModalOpen}
          setModalOpen={setTodoModalOpen}
          newTask={newTask}
          setNewTask={setNewTask}
          handleAdd={handleAddTodo}
          // handleDel={handleDel}
          handleDel={(id) => handleDel(id, todoArr, setTodoArr)}
          dueDateRef={dueDateRef}
        />

        <InProgress
          inProgressArr={inProgressArr}
          modalOpen={inProgressModalOpen}
          setModalOpen={setInProgressModalOpen}
          newTask={newTask}
          setNewTask={setNewTask}
          setInProgressArr={setInProgressArr}
          handleAdd={handleAddInProgress}
          // handleDel={handleDel}
          handleDel={(id) => handleDel(id, inProgressArr, setInProgressArr)}
          dueDateRef={dueDateRef}
        />

        <Completed
          completedArr={completedArr}
          modalOpen={completedModalOpen}
          setModalOpen={setCompletedModalOpen}
          newTask={newTask}
          setNewTask={setNewTask}
          setCompletedArr={setCompletedArr}
          handleAdd={handleAddCompleted}
          // handleDel={handleDel}
          handleDel={(id) => handleDel(id, completedArr, setCompletedArr)}
        />
      </div>
    </main>
  );
};

export default Body;
