import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';

export const Programs = () => {
    const [programs, setProgram] = useState([]);
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    const handleApplyFilter = () => {

    }

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(res => console.log("====>", res.data) || setProgram(res.data))
    }, [])

    return <div>
            <Filter/>
            <Table  
                handleApplyFilter={handleApplyFilter} 
                handlePriorityChange={(e) => setPriority(e.target.value)}
                handleStatusChange={(e) => setStatus(e.target.value)} 
                programs={programs}/>     
        </div>


}