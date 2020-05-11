import axios from 'axios';

/*
The create function creates an a customized instance of the Axios client
with a couple of default properties. 
*/
export default axios.create ({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID n-T-wgrEgXFEPrBwFWwb6hwfhehvimCFowi8rX8qIlc'
    }

});