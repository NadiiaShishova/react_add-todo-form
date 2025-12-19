import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";

type User = {
  id: number;
  name: string;
  username?: string;
  email?: string;
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User;
};

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  return (
    <div
      className={`TodoInfo ${todo.completed ? "TodoInfo--completed" : ""}`}
    >
      <h3 className="TodoInfo__title">{todo.title}</h3>
      <UserInfo user={todo.user} />
    </div>
  );
};
