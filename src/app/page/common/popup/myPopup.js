import React from "react";
import { Button, CloseButton, Form, Modal } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";

const initialFormData = Object.freeze({
  name: "",
  phone: "",
  area: '',
  address: ''
});

export function MyVerticallyCenteredModal(props) {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  }

  const handleSubmit = () => {
    let date = new Date();
    let newDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    console.log(newDate)
    props.handleSubmit({...formData,dayCreate:newDate})
  }
  const close = () => {
    props.close(false)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <div className="modal-title">
          <i class="fa-solid fa-xmark" onClick={close}></i>
        </div>
        <div className="header-popup">
          <div className="title-popup">Hotline tư vấn</div>
          <div className="phone">
            <a
              href="tel:0865328664"
              className="header-nav__contact animate-pulse"
            >
              <span>
                <BsTelephoneFill className="animate-turnCircle"></BsTelephoneFill>
              </span>
              <span className="text-effect">
                <span className="text-child">0</span>
                <span className="text-child">8</span>
                <span className="text-child">6</span>
                <span className="text-child">5</span>
                <span className="text-child">3</span>
                <span className="text-child">2</span>
                <span className="text-child">8</span>
                <span className="text-child">6</span>
                <span className="text-child">6</span>
                <span className="text-child">4</span>
              </span>
            </a>
          </div>
        </div>
        <div className="body-popup">
          <div className="lines"></div>
          <div className="text-phone">
            Hoặc để lại số điện thoại để chúng tôi gọi lại trong ít phút
          </div>
          <div className="form-popup">
            <form>
              <div className="form-group">
                <div>
                  <span>Họ và tên</span>
                </div>
                <input type="text" name="name" onChange={handleChange} className="form-control-custom" />
              </div>
              <div className="form-group">
                <div>
                  <span>Số điện thoại</span>
                </div>
                <input type="number" name="phone" onChange={handleChange} className="form-control-custom" />
              </div>
              <div className="form-group">
                <div>
                  <span>Khu vực</span>
                </div>
                <select aria-label="Default select example " onChange={handleChange} name="area" className='form-control-select'>
                  <option>Chọn khu vực</option>
                  <option value="Miền nam">Miền Nam</option>
                  <option value="Miền trung">Miền Trung</option>
                  <option value="Miền bắc">Miền Bắc</option>
                </select>
              </div>
              <div className="form-group">
                <div>
                  <span>Địa chỉ</span>
                </div>
                <input type="text" name="address" onChange={handleChange} className="form-control-custom" />
              </div>
            </form>
          </div>
          <div className="submit-popup">
            <button onClick={handleSubmit}>Nhận tư vấn ngay</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
