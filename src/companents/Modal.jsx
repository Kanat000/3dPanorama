import React from 'react';
import modalStyle from './css/modal.module.css'
const Modal = ({isModal, setIsModal, ChildComponent}) => {
    return(
        <div className={modalStyle.modal} style={{display: isModal ? 'grid' : 'none'}}>

            <div className={modalStyle.modalContent}>
                {ChildComponent}
                <button className={modalStyle.modalCloser} onClick={()=>setIsModal(!isModal)}>X</button>
            </div>

        </div>
    )
};

export default Modal;