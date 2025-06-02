import React, { useState } from 'react';
import axios from 'axios'
import AdminProfile from './AdminProfile';

export default function AdminDash() {
    const [task, setTask] = useState({});
    const [error, seteror] = useState(null)
    const [success, setsuccess] = useState(null)

    const form = [
        { placeholder: "Enter task title", name: "title", type: "text" },
        { placeholder: "Enter task description", name: "description", type: "textarea" }
    ];

    const handleInputChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });

    };

    const token = sessionStorage.getItem('JsnToken');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3030/admin/createtask", task
            )
            console.log(response);
            setsuccess(response.data.msg)
            setTask(Object.keys(task).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
        }
        catch (e) {
            if (e.response.data) {
                seteror(e.response.msg)
            } else {
                seteror(e.response.message)
            }
        }
    };

    return (
        <div className='bg-blue-100 min-h-screen p-8'>
            <h1 className='text-3xl font-bold text-center'>Admin Dashboard</h1>
            <div className='flex justify-between mt-4'>
                <div className='bg-white w-4/6 p-8 m-4 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-semibold text-center mb-4  mt-4'>Create A Task</h2>

                    <form onSubmit={handleSubmit}>
                        {form.map((item, index) => (
                            <div key={index} className="mb-6">
                                <input
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    type={item.type}
                                    value={task[item.name]}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />

                            </div>
                        ))}
                        {error} {success}

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out flex items-center justify-center" type="submit">

                            Create Task
                        </button>
                    </form>
                </div>
                <AdminProfile />
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Task Overview</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                                    Tasks
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                                    How Many Create
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Project Alpha</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Design Homepage, Develop API</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        5
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <span className="material-icons text-base align-bottom">delete</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Marketing Campaign</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Social Media Posts, Email Blast</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        8
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}