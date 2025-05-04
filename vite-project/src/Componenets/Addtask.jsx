import React, { useState } from 'react';

export default function Addtask() {
    const [task, setTask] = useState([]);

    const input = [
        {
            id: 1,
            type: 'text',
            label: 'Title',
            placeholder: 'Enter your title',
            description: 'Enter a brief title for your project'
        },
        {
            id: 2,
            type: 'textarea',
            label: 'Description',
            placeholder: 'Enter your description',
            description: 'Enter a detailed description of your project'
        },
        {
            id: 3,
            type: 'select',
            label: 'Technology',
            options: ['Frontend', 'Backend', 'Fullstack'],
            description: 'Select the technology used in your project'
        },
        {
            id: 4,
            type: 'text',
            label: 'Tags',
            placeholder: 'Enter tags separated by commas',
            description: 'Enter relevant tags for your project'
        }];


    const AddTask = () => {
        // Placeholder function for now
        console.log('Task Added');
    };

    return (
        <>
            {input.map((field) => (
                <div key={field.id} className=" bg-white mb-4">
                    <label className="block text-gray-700  text-sm font-bold mb-2">{field.label}</label>
                    {field.type === 'textarea' ? (
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder={field.placeholder}
                        />
                    ) : field.type === 'select' ? (
                        <select className="w-full p-2 border border-gray-300 rounded">
                            {field.options.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder={field.placeholder}
                        />
                    )}
                    <p className="text-gray-500 text-xs mt-1">{field.description}</p>
                </div>
            ))}




            <button onClick={AddTask}>Add Task</button>
        </>
    );
}
