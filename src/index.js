import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SeasonDisplay from './SeasonDisplay';
import './seasonDisplay.css';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
    const {lat, errorMessage} = useLocation();

    return (
        <div>
            {errorMessage === '' && lat === null ?
                // insert spinner
                <Spinner textSpinner='Please accept location request' />
                :
                <div>
                    {errorMessage === '' ?
                        <SeasonDisplay lat={lat} />
                        :
                        <p>Error: {errorMessage}</p>
                    }
                </div>
            }
        </div>);
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
