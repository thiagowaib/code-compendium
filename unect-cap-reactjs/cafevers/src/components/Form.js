import React from 'react'
import api from '../services/api';

import '../css/Form.css';

const Form = (props) => {
    const [user, setUser] = React.useState("");
    const [pw, setPw] = React.useState("");

    function handleUserChange(e){
        setUser(`${e.target.value}`)
    }
    function handlePwChange(e){
        setPw(`${e.target.value}`)
    }

    // Submit
    async function handleSubmit(e)
    {
        e.preventDefault();

        try{
            await api.post('login', {

                username: user,
                password: pw

            });
        }catch(err){
            console.log("%cNão foi pq o banco não tem login ;)",
            "color: red; font-style: italic; background: white; padding: 5px");
        }
        

        // Reseta o forms
        setUser('');
        setPw('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input">
                <label>
                    {props.label1}
                </label>
                <input 
                    onChange={handleUserChange}
                    value={user} 
                    placeholder=". . ."
                />
            </div>

            <div className="input">
                <label>
                    {props.label2}
                </label>
                <input  
                    onChange={handlePwChange} 
                    value={pw} 
                    placeholder=". . ."
                />
            </div>

            <button 
            className="button"
            type="submit"
            >
                {props.btnText}
            </button>

            {user=="Cafeicultor" && (<h6>❤️</h6>)}

        </form>
    )
}

export default Form
