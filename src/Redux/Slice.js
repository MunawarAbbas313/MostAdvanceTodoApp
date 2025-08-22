import { createSlice } from "@reduxjs/toolkit";
import { saveTolocalStorage , loadFromLocalStorage } from "../Utlilits/LocalStorage";

const initialState = loadFromLocalStorage("todos", []);

export const TodoSlice = createSlice({
  name: "TodoList",
  initialState,   // <-- must match exactly
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveTolocalStorage("todos",state);
    },
    deleteTodo: (state, action) => {
     return state.filter((todo) => todo.id !== action.payload);
      saveTolocalStorage("todos",state);
    },
    toggleTodo: (state, action) => {
      const todo = state.fint((t)=> t.id === action.payload);
      if(todo){
        todo.completed = !todo.completed;
      }
      
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
       saveTolocalStorage("todos",state);
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo , editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
