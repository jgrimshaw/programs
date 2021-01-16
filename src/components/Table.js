import React from 'react'

const Table = ({programs}) => {
    return (
        <div>
           <table>
               <thead>
                   <tr>
                   <th>Program Title</th>
                   <th>Priority</th>
                   <th>Status</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       programs.map((row, index)=> <tr key={index}>
                           <td>{row['Program Title']}</td>
                           <td>{row['Priority']}</td>
                           <td>{row['Status']}</td>
                       </tr>)
                   }
               </tbody>
           </table>
        </div>
    )
}

export default Table
