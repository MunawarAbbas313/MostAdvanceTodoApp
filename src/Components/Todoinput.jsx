import { useSelector , useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slice";
import { useState } from "react";

function Todoinput() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  const [todoText , setTodoText] = useState("");
  const todos = useSelector((state)=> state.todo);
  const dispatch = useDispatch();

  const HandleAdd = ()=>{
    if(!todoText.trim()) return;
    const newTodo = {id:Date.now(), text:todoText, completed:false}
    dispatch(addTodo(newTodo));
    console.log(todoText);
    
    setTodoText("");
  }
  return (
    <div className="p-4 flex flex-row justify-center items-center mt-20 md:w-full">
      <input type="text" 
        value={todoText}
        onChange={(e)=>setTodoText(e.target.value)}
        placeholder="Enter your Task ........" 
        className ={`w-[55vh] text-lg font-semibold font-sans  rounded-l-lg p-3 md:w-[80vh] border border-gray-300 outline-none shadow-lg ${darkMode? "bg-gray-100 text-black/50 ":"bg-black text-white"}`}
      />
      <button className="text-xl font-semibold font-sans border-none bg-green-300 cursor-pointer px-7 py-[12.5px] rounded-r-lg hover:bg-green-500 duration-300"
      onClick={HandleAdd}
      >Add</button>
    </div>
  );
}

export default Todoinput;
