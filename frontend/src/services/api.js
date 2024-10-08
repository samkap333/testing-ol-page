import axios from 'axios'
import { baseUrl } from '../components/constants'

console.log(baseUrl);

const axiosInstance = axios.create({
    
});

axiosInstance.defaults.baseURL = baseUrl;

  
export const contactDetails = (data) => {
    return axiosInstance.post('/contact-info-user', data, {
        
    });
}

