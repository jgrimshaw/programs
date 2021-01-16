import React, { useState} from 'react';

const ProgramForm = ({ handleSubmit }) => {
    const [ title, setTitle ] = useState('')
    const [ priority, setPriority ] = useState('')
    const [ status, setStatus ] = useState('')
    return (
        <div>
           
            <input type='text' name='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>

            <div>
                <label htmlFor='priority'>Priority</label>
                <select name='priority' id='priority' onChange={(e) => setPriority(e.target.value)}>
                    <option>Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
            </div>

            <div>
                <label htmlFor='status'>Status</label>

                <select name='status' id='status' onChange={(e) => setStatus(e.target.value)}>
                <option>Status</option>
                    <option value='available'>Available</option>
                    <option value='Not available'>Not available</option>
        
                </select>
            </div>

            <div>
                <button disabled={!(title && status && priority)} onClick={()=> handleSubmit(title, priority, status) }>Submit</button>
            </div>
            
        </div>
    )
}

export default ProgramForm;