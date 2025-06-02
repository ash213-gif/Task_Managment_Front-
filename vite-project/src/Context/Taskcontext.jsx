import axios from 'axios';
import React, { useEffect, createContext, useState } from "react";

export const TaskContext = createContext(null);

export default function ContextTask({ children }) {
    const [error, seteror] = useState(null);
    
    const [getdata, setgetdata] = useState([]); // empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3030/admin/gettasks');             
                setgetdata(response.data.getData);
            } catch (e) {
                if (e.response && e.response.msg) {
                    seteror(e.response.msg);
                } else {
                    seteror(e.message);
                }
            }
        };
        fetchData();
    }, []);

    return (
        <TaskContext.Provider value={{ getdata, setgetdata }}>
            {children}{error}
        </TaskContext.Provider>
    );
}