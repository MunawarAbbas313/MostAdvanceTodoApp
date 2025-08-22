import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSave } from "react-icons/fa"; // save icon
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Redux/Slice";
import { useState } from "react";

function Todolist() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // local state to track which todo is being edited
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (id, text) => {
    setEditId(id); // set which todo is in edit mode
    setEditText(text); // fill input with old text
  };

  const handleSaveClick = (id) => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ id, newText: editText }));
    }
    setEditId(null); // exit edit mode
    setEditText("");
  };

  return (
    <div>
      <ul className="flex flex-col gap-10 justify-center items-center ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between border p-5 w-[40vh] md:w-[70vh] text-2xl font-semibold font-sans"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border p-2 w-full mr-4"
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <span className="flex justify-center items-center gap-4 cursor-pointer">
              {editId === todo.id ? (
                <FaSave
                  className="text-blue-500 text-3xl hover:text-blue-700"
                  onClick={() => handleSaveClick(todo.id)}
                />
              ) : (
                <CiEdit
                  className="text-green-500 text-3xl hover:text-green-600"
                  onClick={() => handleEditClick(todo.id, todo.text)}
                />
              )}
              <MdDeleteOutline
                className="text-red-500 text-3xl hover:text-red-700"
                onClick={() => dispatch(deleteTodo(todo.id))}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
