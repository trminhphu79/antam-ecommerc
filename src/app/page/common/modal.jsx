import React, { Component } from 'react';
import { getValueModal } from '../utils/getValueModal';
import "./styles/modal.css";

class Modal extends Component {

  raiseCreateModal = () => {
    const value = getValueModal(this.props.products);
    this.props.onCreate(value);
    this.props.history.replace('/admin/all-products');
  }

  cancelModal = () => {
    this.props.history.replace('/admin/all-products');
  }

  getEditValue = (id,products) => {
    for (let item of products) {
      if (item._id === id)
        return item ; 
    };

    return console.log('error at productContent component');
  }

  render() {
    const { inputField , match , products } = this.props;
    if (match.params._id) {
      const value = this.getEditValue(match.params._id ,products);
      console.log(value)
      return (
        <div className="modal-create">
          <div className="modal-body">
            <h2>edit a product : </h2>
            <form action="">
              {inputField.map((item) => (
                <input key={item.name} type={item.type} placeholder={item.name} value={value[item.name]} name={item.name} />
              ))}
              <input type="file" id="image_input" multiple />
            </form>
            <div className="modal-button">
              <button
                className="modal-button-cancel"
                onClick={this.cancelModal}
              >
                cancel
              </button>
              <button onClick={this.raiseCreateModal} className="modal-button-save">save change</button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="modal-create">
        <div className="modal-body">
          <h1>Tạo Mới Sản Phẩm</h1>
          <form action="">
            {inputField.map((item) => (
              <input key={item.name} type={item.type} placeholder={item.name} name={item.name} />
            ))}
            <input type="file" id="image_input" multiple />
          </form>
          <div className="modal-button">
            <button
              className="modal-button-cancel"
              onClick={this.cancelModal}
            >
              cancel
            </button>
            <button onClick={this.raiseCreateModal} className="modal-button-save">save change</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

