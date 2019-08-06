import React from 'react';
import './modal.css';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'something':
    
            component = <div>Hello2</div>;
            break;
        default:
    
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;