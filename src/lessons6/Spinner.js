import React from 'react'

const Spinner = (props) => {
return(
    <div className='ui active dimmer'>
        <div className='ui text big loader'>
            {props.textSpinner}
        </div>

    </div>
);
}

Spinner.defaultProps = {
    textSpinner: 'Loading...'
}

export default Spinner;