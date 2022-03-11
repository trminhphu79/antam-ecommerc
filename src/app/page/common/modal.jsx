import React from "react";
import { displayModal, hiddenModal } from "../utils/displayModal";
import "./styles/modal.css";

const Modal = ({ inputField }) => {
  
  return (
    <React.Fragment>
      <button
        className="modal-control btn-success"
        onClick={() => displayModal()}
      >
        create
      </button>
      <div className="modal-create">
        <div className="modal-body">
          <h2>create a new product : </h2>
          <form action="">
            {inputField.map((item) => (
              <input key={item.label} type={item.type} placeholder={item.label} />
            ))}
            <input type="file" multiple />
          </form>
          <div className="modal-button">
            <button
              className="cancel btn-primary"
              onClick={() => hiddenModal()}
            >
              cancel
            </button>
            <button className="save btn-success">save change</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
