import { useState } from "react"

function Form(){
    let [name, setName] = useState('');   //creating a state 

    function handleChange(e: any){
        setName(e.target.value);
    }

    return (
        <>
        <form >
            <label>Enter your name:
                <input 
                type="text"
                value={name}
                onChange={handleChange}
                />
            </label>
             <p>Current value:{name}</p>
        </form>
        </>
    )
}
export default Form;