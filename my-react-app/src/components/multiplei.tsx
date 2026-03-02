import { useState } from "react";

function MultipleInputs(){
    const [inputs, setInputs] = useState({firstname: 'John', lastname: 'Doe'});

    const handleChange = (e:any)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        setInputs(values => ({...values, [name]: value}));
    }

    return (
        <form>
            <label>First Name: 
                <input type="text"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                />
            </label>
            <label>Last Name: 
                <input type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                />
            </label>
            
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}

export default MultipleInputs;