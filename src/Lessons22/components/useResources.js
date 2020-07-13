import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    //metodo classico
    //in Hooks non si possono inserire direttamente funzioni asincrone nello useEffect
    //per questo si crea una funzione o in questo documento o in un altro documento
    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data)
    }

    //do componentDidMount and componentDidUpdate
    useEffect(() => {
        //fetchResource(resource)

        //metodo alternativo per invocare una funzione all'interno di useEffect
        //tra le prime parentesi tonde definisco una funzione e nelle seconde la invoco direttamente
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

            setResources(response.data)
        })(resource)

    }, [resources])

    return resources
}

export default useResources
