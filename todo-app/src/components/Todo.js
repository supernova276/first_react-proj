import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem.js"
import {useEffect,useState} from 'react'

const Todo=()=>{

const[itemList,setList]=useState([])

const addItem=(todoItem)=>{

setList([todoItem,...itemList])

}  
    return(<>
             
             <TodoForm AddTodoItem={addItem}></TodoForm>
             <TodoItem list={itemList}></TodoItem>
    </>)
}
export default Todo