import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';
import ProgramForm from '../components/ProgramForm';

export const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');

    const makeApiCall = (status, priority) => {

        fetch(`/api?status=${status}&priority=${priority}`).then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(res => console.log("====>", res.data) || setPrograms(res.data))
    }

    const handleSubmit = (title, priority, status) => {
        fetch(`/api/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'Program Title': title,
                'Priority': priority,
                'Status': status
            })
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(()=> {
            makeApiCall()
        })
    }

    const handleDelete = (title) => {
        fetch(`/api/delete/${title}`, {
            method: 'DELETE'
        }).then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(res =>  setPrograms(res.data))
    }

    const handleApplyFilter = () => {
        console.log("=====calling", status, priority)
        makeApiCall(status, priority)
    }

    useEffect(() => {
        makeApiCall(status, priority)
    }, [])

    return <div>

            <Filter
                handleApplyFilter={handleApplyFilter} 
                handlePriorityChange={(e) => setPriority(e.target.value)}
                handleStatusChange={(e) => setStatus(e.target.value)} 
            />
            
            <Table programs={programs} handleDelete={handleDelete}/>     

            <ProgramForm handleSubmit={handleSubmit}/>
        </div>

}