import { useState } from "react";
import "./toast.scss";

export const Toast = () => {
  return (
    <div className="toasts">
      <div Class="toast-box success">
        {<i class="fa-solid fa-circle-check"></i>}
        {/* {<i class="fa-solid fa-triangle-exclamation"></i>}
        {<i class="fa-solid fa-circle-exclamation"></i>} */}
        <p Class="toast-box__message">This is a Success message !</p>
        <span Class="toast-box__count-down"></span>
      </div>
    </div>
  );
};
