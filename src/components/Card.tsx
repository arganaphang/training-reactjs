import React from "react";
import { Todo } from "@/types/todo";

const Card: React.FC<Todo> = ({ id, title, is_done, created_at }) => {
  return (
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
      <span
        className={`flex h-2 w-2 translate-y-1 rounded-full ${
          is_done ? "bg-sky-500" : "bg-red-500"
        }`}
      />
      <div className="space-y-1">
        <p className="font-medium leading-none text-gray-700">{title}</p>
        <p className="text-sm text-muted-foreground text-gray-400 font-thin">
          Created At {created_at.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Card;
