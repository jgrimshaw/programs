import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import ProgramForm from './components/ProgramForm';
import Header from './components/Header';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');

    useEffect(() => {
        makeApiCall(status, priority)
    }, [])

    const makeApiCall = (status, priority) => {
        fetch(`/api?status=${status}&priority=${priority}`).then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(res => setPrograms(res.data))
    }

    const handleApplyFilter = () => {
        makeApiCall(status, priority)
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

    return <div>
            <Header />
            <h1>Programs</h1>
            <div className='options-container'>
                <Filter
                    handleApplyFilter={handleApplyFilter} 
                    handlePriorityChange={(e) => setPriority(e.target.value)}
                    handleStatusChange={(e) => setStatus(e.target.value)} 
                />
                <ProgramForm handleSubmit={handleSubmit}/>
            </div>
            <Table programs={programs} handleDelete={handleDelete}/>     
            
        </div>
}

export default Programs;