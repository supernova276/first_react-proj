import {useState,useEffect} from 'react'

const TodoForm=({AddTodoItem})=>{

    const[input,setInput]=useState({
        id:"",
        text:""
    })
    const[counter,setCounter]=useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setInput({
            id:counter+1
        })
        setCounter(counter+1)
         if(input.text)
        AddTodoItem(input)
    }

    const handleInput=(e)=>{
        input.text=e.target.value;
    }
    return(
    
    <div className="form-container">
    <form>
        <input type="text" placeholder="enter item"  onChange={handleInput}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>

    )
}
export default TodoForm