import axios from 'axios';

 const  api = axios.create(
    {
      baseURL: "https://blog-page-9b1f7-default-rtdb.europe-west1.firebasedatabase.app",
    }
  );
  export default api;