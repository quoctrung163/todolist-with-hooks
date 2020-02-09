import React, { useState, useEffect } from "react";
import "./styles.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/checkall.svg";

export default function App() {
  const todoItemsArr = [
    {
      title: "Mua bim bim",
      isComplete: true
    },
    {
      title: "Đi đá bóng",
      isComplete: true
    },
    {
      title: "Đi đổ xăng"
    }
  ];
  const [newItems, setNewItems] = useState("");
  const [todoItems, setTodoItems] = useState(todoItemsArr);

  const onKeyUp = event => {
    let text = event.target.value;
    if (event.keyCode === 13) {
      // enter keycode
      if (!text) {
        return;
      }
      text = text.trim();

      if (!text) {
        return;
      }

      setTodoItems([
        {
          title: text,
          isComplete: false
        },
        ...todoItems
      ]);
    } else {
      setNewItems(text);
    }
  };

  const onChange = event => {
    setNewItems(event.target.value);
  };

  const onItemClicked = item => {
    return event => {
      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);
      setTodoItems([
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
      ]);
    };
  };

  return (
    <div className="App">
      <div className="Header">
        <img src={tick} witdh={30} height={30} alt="img" />
        <input
          type="text"
          placeholder="Add a new item"
          onChange={onChange}
          value={newItems}
          onKeyUp={onKeyUp}
        />
      </div>
      {todoItems.length > 0 &&
        todoItems.map((item, index) => {
          return (
            <TodoItem key={index} item={item} onClick={onItemClicked(item)} />
          );
        })}

      {todoItems.length === 0 && "Nothing here.............."}
    </div>
  );
}
