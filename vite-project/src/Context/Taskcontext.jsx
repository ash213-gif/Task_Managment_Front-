import React from 'react'
import { createContext, useState } from "react";

export  const TaskContext = createContext(null)

export default function ContextTask({ children }) {

    const [tasks, setTasks] = useState([
        {
            title: 'Backend',
            description: 'This is my first backend project where I learned to design RESTful APIs, interact with databases, and implement security mechanisms.',
            status: 'Incomplete'
        },
        {
            title: 'Frontend',
            description: 'This is my first frontend project where I gained hands-on experience with HTML, CSS, and JavaScript. I used React to build a dynamic user interface.',
            status: 'Complete'
        },
        {
            title: 'And many more',
            description: 'I have worked on numerous projects that involve integrating backend and frontend technologies, designing scalable architectures, and optimizing performance.',
            status: 'Incomplete'
        },
        {
            title: 'And many more',
            description: 'I have worked on numerous projects that involve integrating backend and frontend technologies, designing scalable architectures, and optimizing performance.',
            status: 'Complete'
        },
    ]);

    return (

        <TaskContext.Provider value={{ tasks, setTasks }} >
            {children}
        </TaskContext.Provider>


    )
}





