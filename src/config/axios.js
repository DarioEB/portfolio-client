import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://whispering-gorge-63143.herokuapp.com/'
});

export default axiosClient;