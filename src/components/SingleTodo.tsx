import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex md:w-1/3 px-2 sm:w-1/3 py-5 mt-5 bg-amber-200 rounded-lg hover:shadow-2xl hover:bg-amber-300"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full"
        />
      ) : todo.isDone ? (
        <s className="w-5/6 text-xl">{todo.todo}</s>
      ) : (
        <span className="w-5/6 text-xl">{todo.todo}</span>
      )}

      <div className="flex">
        <span
          className="text-2xl mx-2"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <CiEdit />
        </span>
        <span className="text-2xl mr-2" onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline />
        </span>
        <span className="text-2xl" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
