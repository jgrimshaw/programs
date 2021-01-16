import React from 'react';

const  Filter = ({ handleApplyFilter, handlePriorityChange, handleStatusChange}) => {
    return (
        <div>
            <div>
                <label htmlFor="priority">Priority</label>
                <select name="priority" id="priority" onChange={handlePriorityChange}>
                    <option></option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
            </div>

            <div>
                <label htmlFor="status">Status</label>

                <select name="status" id="status" onChange={handleStatusChange}>
                <option></option>
                    <option value="available">Available</option>
                    <option value="Not available">Not available</option>
        
                </select>
            </div>

            <div>
                <button onClick={handleApplyFilter}>
                    Apply Filter
                </button>
            </div>
        </div>
    )
}

export default Filter;