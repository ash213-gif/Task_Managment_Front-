import React, { useState, useContext } from 'react';
import { TaskContext } from '../../Context/Taskcontext';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

export default function Alltask() {
  const dataContext = useContext(TaskContext);

  const [tasks, setTasks] = useState(dataContext.getdata); 

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h4 className="text-3xl font-bold text-center mb-4">All Tasks</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tasks.map((task, index) => (
          <div
            className="bg-gray-100 rounded-2xl p-4 shadow-md hover:bg-gray-300 transition duration-300 ease-in-out"
            key={index}
          >
            <h2 className="text-lg font-bold text-blue-600 mb-2">{task.title}</h2>
            <p className="text-gray-700 mb-4">{task.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <FaPencilAlt
                  className="text-blue-600 cursor-pointer hover:text-blue-800"
                  size={20}
                />
                <FaTrash
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-600 cursor-pointer hover:text-red-800"
                  size={20}
                />
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded ${
                  task.IsComplete
                    ? 'bg-green-200 text-green-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
              >
                {task.IsComplete ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}