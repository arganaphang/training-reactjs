import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  id: number;
  title: string;
  completed: boolean;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

const Card: React.FC<Props> = ({
  id,
  title,
  completed,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="select-none mb-4 flex gap-4 items-start pb-4 last:mb-0 last:pb-0 cursor-pointer">
      <span
        className={`flex h-2 w-2 translate-y-1 rounded-full ${
          completed ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <div
        className="space-y-1"
        onClick={() => {
          onToggleTodo(id);
        }}
      >
        <p
          className={`font-medium leading-none text-gray-700 ${
            completed ? "line-through" : undefined
          }`}
        >
          {title}
        </p>
        <p
          className={`text-sm text-muted-foreground text-gray-400 font-thin ${
            completed ? "line-through" : undefined
          }`}
        >
          Created At {new Date().toLocaleString()}
        </p>
      </div>
      <XCircleIcon
        width={24}
        height={24}
        className="text-red-400 self-center"
        onClick={() => {
          onDeleteTodo(id);
        }}
      />
    </div>
  );
};

export default Card;
