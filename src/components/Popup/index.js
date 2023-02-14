import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Info from "../../pages/Info";
import { setModalFalse } from "../../services/modalSlice";
function Popup() {
  const isOpened = useSelector((state) => state.modalSlice.value);
  const dispatch = useDispatch();

  const customStyles = {
    overlay: {
      backgroundColor: "#000000ab",
      zIndex: 9999
    },
    content: {
      top: "25px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translateX(-50%)",
      backgroundColor: "#090909",
      border: "none",
      paddingLeft: "0",
      paddingRight: "0",
      paddingTop: "0",
      // paddingBottom: "0"
    }
  };

  function closeModal() {
    dispatch(setModalFalse());
  }
  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <Info />
    </Modal>
  );
}
export default Popup;
