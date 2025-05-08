import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Addtask({ setAdd, addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        addTask({ title, description });
        setTitle('');
        setDescription('');
        setAdd(false);
    };

    const closediv = () => {
        setAdd(false);
    };

    return (
        <>
            <div className="flex fixed h-screen w-full justify-center items-center">
                <div className="bg-white h-auto w-3/6 mr-72 gap-3 flex flex-col items-center m-5 rounded-2xl p-6 relative">
                    <FaTimes
                        onClick={closediv}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
                        size={20}
                    />
                    <h1 className="text-3xl font-mono">Enter Your Task</h1>
                    <h2 className="font-mono">Title</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-4/6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Title"
                    />
                    <h2 className="font-mono">Description</h2>
                    <textarea
                        type="text"
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-4/6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Description"
                    />
                    <button onClick={handleAddTask}>
                        <span className="p-2 bg-green-500 rounded-lg text-white font-bold">
                            Add task
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}