import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    //say that this element is under the body element
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
            <div className='ui standard modal visible active' onClick={(e) => e.stopPropagation()}>
                <div className='ui header'>
                    {props.title}
                    </div>
                <div className='ui content'>
                    {props.content}
                    </div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal