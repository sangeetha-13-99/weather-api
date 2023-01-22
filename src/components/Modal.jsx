import { Fragment } from "react";
import ReactDOM from 'react-dom';
import { Overlay } from "./Modal.styled";

function ModalOverlay(props){
    return(
        <Overlay className="modal-overlay">
            {props.children}
        </Overlay>
    );
}

function Modal(props) {
    let portalElement=document.getElementById('modal');
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay isModal="">{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
  }
  
export default Modal
  