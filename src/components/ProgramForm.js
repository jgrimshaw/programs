import React, { useState } from 'react';
import '../css/styles.css';

const ProgramForm = ({ handleSubmit }) => {
    const [ title, setTitle ] = useState('')
    const [ priority, setPriority ] = useState('')
    const [ status, setStatus ] = useState('')

    return (
        <div className='option-container'>
            <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <div>
                <select name='priority' id='priority' value={priority} className='select' onChange={(e) => setPriority(e.target.value)}>
                    <option value=''>Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
            </div>

            <div>
                <select name='status' id='status' value={status} className='select' onChange={(e) => setStatus(e.target.value)}>
                    <option value=''>Status</option>
                    <option value='available'>Available</option>
                    <option value='Not available'>Not available</option>
                </select>
            </div>

            <div>
                <button 
                    className='btn-submit'
                    disabled={!(title && status && priority)} onClick={() => {
                        handleSubmit(title, priority, status) 
                        setPriority('');
                        setStatus('');
                        setTitle('');
                }}>Submit</button>
            </div>
        </div>
    )
}

export default ProgramForm;