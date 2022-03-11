import React, { Component } from 'react';
import { displayModal, hiddenModal } from "../utils/displayModal";
import { getValueModal } from '../utils/getValueModal';
import "./styles/modal.css" ;

class Modal extends Component {

  raiseCreateModal = () =>{
    const value = getValueModal(this.props.products) ; 
    this.props.onCreate(value) ; 
  }

  render() {
    const { inputField } = this.props;

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
                <input key={item.name} type={item.type} placeholder={item.name} name={item.name} />
              ))}
              <input type="file" id="image_input" multiple />
            </form>
            <div className="modal-button">
              <button
                className="cancel btn-primary"
                onClick={() => hiddenModal()}
              >
                cancel
              </button>
              <button onClick={this.raiseCreateModal} className="save btn-success">save change</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;

