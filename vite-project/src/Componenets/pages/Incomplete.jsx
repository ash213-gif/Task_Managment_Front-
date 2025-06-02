import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/Taskcontext'

export default function Complete() {

  const DataContext = useContext(TaskContext)
  const [complete, setcomplete] = useState(DataContext.getdata)

  return (
    <>

      <h4 className="text-3xl justify-center flex p-6 font-mono mb-4">InCompleted Tasks</h4>
      <div className=" grid grid-cols-3 gap-10  mt-5 p-7  ">

        {complete.map((tasks, i) => (
          <div key={i} className="mb-4 p-4 bg-gray-100 rounded-2xl">
            <h5 className="text-lg font-semibold">{tasks.title}</h5>
            <p className="text-gray-600">{tasks.description}</p>
            <p className={`text-sm ${tasks.IsComplete ? 'text-green-500' : 'text-red-500'}`}>
              {tasks.IsComplete ? 'Completed' : 'Not Completed'}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}