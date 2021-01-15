import React, { useState, useEffect } from 'react';

export const Programs = () => {
    // const [program, setProgram] = useState([])

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])

    return <div>something else</div>
}