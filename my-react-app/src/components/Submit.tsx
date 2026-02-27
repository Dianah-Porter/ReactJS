import { useState } from "react";

function OnSubmit(){
    const [name, setName] = useState('');
    function handleChange(e: any){
        setName(e.target.value)
    }
    function handleSubmit(e: any){
        e.preventDefault()
        alert(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Enter your name: 
                <input type="text"
                value={name}
                onChange={handleChange}
                />
                <button>Submit</button>
            </label>
        </form>
    )
}

export default OnSubmit;