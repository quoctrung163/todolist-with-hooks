import React from "react";
import classNames from "classnames";

import "./TodoItem.css";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";

export default function TodoItem(props) {
  const { item, onClick } = props;

  let url = checkImg;
  if (item.isComplete) {
    url = checkCompleteImg;
  }

  return (
    <div
      onClick={onClick}
      className={classNames("TodoItem", {
        "TodoItem-complete": item.isComplete
      })}
    >
      <img src={url} witdh={30} height={30} alt="img" />
      <p>{item.title}</p>
    </div>
  );
}
