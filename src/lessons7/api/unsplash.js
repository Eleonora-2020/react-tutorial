import axios from 'axios';

//customize copy
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eX8Wq-OahGUzSND3_rv9x28v7wm2noIxVhwg0Q6IfUY'
    }
});