import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../../Context/Taskcontext'

export default function Complete() {

  const completeData = useContext(TaskContext)

  const filterComplete = completeData.tasks.filter((newtasks) => newtasks.status === 'Incomplete');
  console.log(filterComplete);


  return (
    <div className=' grid grid-cols-3 gap-8 m-6  '>
      {filterComplete.map((items, i) => (
        <div className="max-w-md mx-auto  p-4 bg-blue-200 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold mb-2">{items.title}</h2>
          <p className="text-gray-600 mb-4">{items.description}</p>
          <span className={`p-3 text-xs font-semibold rounded ${items.status === 'Complete' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{items.status}</span>
        </div>
      ))}

    </div>
  )
}
