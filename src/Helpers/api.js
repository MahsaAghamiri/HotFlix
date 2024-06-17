import axios from "axios";

const API = axios.create({
    baseURL: 'https://moviesapi.codingfront.dev/api/v1/'
  });
  
 export default API; 