import { CreateToast } from "app/page/utils/createToast";
import { newCustomer } from "core/redux/actions/userAction";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MyVerticallyCenteredModal } from "./myPopup"

export const CustomerPopup = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setModalShow(true)
    }, 500)
  }, [])

  const handleSubmit = (data) => {
    if (data.phone && data.name && data.address) {
      dispatch(newCustomer(data))
      setModalShow(false);
      CreateToast('success',"Gửi thông tin liên hệ thành công!")
    }
  }
  const close = (value) => {
    setModalShow(value)
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        width={"500px"}
        dialogClassName="customer-usermodal"
        handleSubmit={handleSubmit}
        onHide={() => setModalShow(false)}
        close={close}
      />
    </>
  )
}