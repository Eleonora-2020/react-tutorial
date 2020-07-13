import { useState, useEffect } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        console.log('My component was render on the screen');
        window.navigator.geolocation.getCurrentPosition(
            //callback success
            (position) => {
                console.log(position);
                setLat(position.coords.latitude);
            },
            //callback error
            (err) => {
                console.log(err);
                setErrorMessage(err.message);
            }
        );
    }, [])

    return {lat: lat, errorMessage: errorMessage}
}

export default useLocation