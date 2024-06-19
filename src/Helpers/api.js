import axios from "axios";

const API = axios.create({
    baseURL: 'https://moviesapi.codingfront.dev/api/v1/'
  });
  
//   API.interceptors.response.use(
//     function(response){},
//     function(error){
//         window.location.replace('/');
//     }
//   );

 export default API; 
