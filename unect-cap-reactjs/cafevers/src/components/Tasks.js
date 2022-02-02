import React from 'react'
import api from '../services/api';

import '../css/Tasks.css';

const Tasks = () => {

    async function handleRequest(){

        await api.request('tasks')
        .then((response)=>{
            response.data.map((task)=>console.table(task))
        })
        .catch((err)=>{
            console.log("Ocorreu um erro no login");
        });

    }

    return (
        <article id="tasks">
            <button onClick={handleRequest}>Fazer GET request!</button>
        </article>
    )
}

export default Tasks
