// import axios from "axios";

// import { useNavigate } from "react-router-dom";
// // import useAuth from "./useAuth";
// import { useEffect } from "react";
// // import { AuthContext } from "../../AuthProvider/AuthProvider";



// const axiosSecure = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',

//   withCredentials: true,
// });

// const useAxiosSecure = () => {



//   useEffect(() => {

//     axiosSecure.interceptors.response.use((config) => {

//       return config;
//     },
    
//     (error) => {
//       // console.log(error.response.status);
//       if (error.response?.status === 401 || error.response.status === 403) {

//         // userLogOut()
//         //   .then(() => {
//         //     navigate('/login')
//         //     //    alert(error.response?.data?.message,)


//         //   })
//         //   .catch(() => {
//         //     // console.log(error);
//         //   });
//       }


//       return Promise.reject(error);
//     }
//     );
//   }, [navigate])
//   return axiosSecure
// };

// export default useAxiosSecure;