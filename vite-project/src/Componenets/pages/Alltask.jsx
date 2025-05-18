import React, { Children, useContext, useState } from 'react';
import Addtask from '../Addtask';
import { TaskContext } from '../../Context/Taskcontext';
import { FaPencilAlt, FaTrash, FaPlus } from 'react-icons/fa';

export default function Alltask({ children }) {

  const dataContext = useContext(TaskContext)

  const [add, setAdd] = useState(false);

  const addTask = (task) => {
    setAdd([...add, { ...add, status: 'Pending' }])
  };

 
  const TaskModeOn = () => {
    setAdd(true);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };


  return (
    <div className="grid grid-cols-3 h-full  gap-5">
      {dataContext.tasks.map((task, index) => (
        <div
          className="flex flex-col bg-blue-100 h-64 overflow-y-auto  rounded-2xl shadow-md p-2 m-3 hover:bg-blue-100 transition duration-300 ease-in-out"
          key={index}
        >
          <div className="flex flex-col gap-2 justify-between items-start mb-2">
            <h2 className="text-lg font-bold text-blue-600">{task.title}</h2>
            <p className="text-gray-700">{task.description}</p>
            <div className="flex space-x-4 p-0 m-0">
              <FaPencilAlt
                className="text-blue-600 cursor-pointer hover:text-blue-800"
                size={20}
              />
              <FaTrash
                onClick={() => handleDeleteTask(index)}
                className="text-red-600 cursor-pointer hover:text-red-800"
                size={20}
              />
              <button className=" text-white font-bold p-1 rounded transition duration-300 ease-in-out">
                <span className={`p-3 text-xs font-semibold rounded ${task.status === 'Complete' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{task.status}</span>

              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col justify-around h-64 bg-blue-200 m-2 rounded-2xl items-center">
        <FaPlus onClick={TaskModeOn} size={50} />
        <button onClick={TaskModeOn}>
          <span className="p-2 bg-green-500   overflow-y-auto   rounded-lg text-white font-bold">
            Add task
          </span>
        </button>
      </div>

      {add && <Addtask setAdd={setAdd} addTask={addTask} />}
    </div>
  );
}