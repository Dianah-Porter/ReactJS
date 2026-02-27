import { useState } from "react"

function TextArea(){
    let [text, setText] = useState('');

    function handleChange(e: any){
        setText(e.target.value);
        
    }
    

    return (
        <form>
            <label>
                Enter your text: 
                <textarea 
                    value={text}
                    onChange={handleChange}
                ></textarea>
            </label>
            <p>Currenct Value: {text}</p>
        </form>
        
    )
}

export default TextArea;

