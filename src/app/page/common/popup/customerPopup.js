import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { MyVerticallyCenteredModal } from "./myPopup"

export const CustomerPopup = ()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(()=>{
        setTimeout(()=>{
        setModalShow(true)
        },500)
    },[])
    return(
        <>
        <MyVerticallyCenteredModal
          show={modalShow}
          width={"500px"}
          dialogClassName="customer-usermodal"
          onHide={() => setModalShow(false)}
        />
      </>
    )
}