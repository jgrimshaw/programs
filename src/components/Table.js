import React from 'react';

const Table = ({programs, handleDelete}) => {
    return (
        <div className='table-container'>
           <table>
               <thead style={{bacgroundColor: 'blue'}}>
                   <tr >
                        <th>Program Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                   </tr>
               </thead>
               <tbody>
                   {
                        programs.map((row, index)=> <tr key={index}>
                            <td className='td-program-title'>{row['Program Title']}</td>
                            <td className='td-priority'>{row['Priority']}</td>
                            <td className='td-status'>{row['Status']}</td>
                            <td><button onClick={() => handleDelete(row['Program Title'])}>Delete</button></td>
                        </tr>)
                   }
               </tbody>
           </table>
        </div>
    )
}

export default Table;
