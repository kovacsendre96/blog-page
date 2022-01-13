import api from './axios';




  const firebaseConfig = {
    apiKey: "AIzaSyAog6Ak1K2HS6qGF_3caC4r3QCqaz5Mbe0",
    authDomain: "blog-page-9b1f7.firebaseapp.com",
    databaseURL: "https://blog-page-9b1f7-default-rtdb.europe-west1.firebasedatabase.app.json",
    projectId: "blog-page-9b1f7",
    storageBucket: "blog-page-9b1f7.appspot.com",
    messagingSenderId: "12356660190",
    appId: "1:12356660190:web:9d944458bd868ac7ec4b4f",
    measurementId: "G-H02D51MG6K"
  };
  
  export const getBlogData = (setState,setLoading) => {
    const fetchedResult = [];
     api.get('/0.json').then((res) => {
       if(res.statusText == "OK"){
         setState(res.data);
         setLoading(false);
       }
/*         for (let key in res.data) {
            fetchedResult.unshift({
                ...res.data[key],
                id: key
            });
        } */
    })
}



