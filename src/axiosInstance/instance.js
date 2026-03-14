import axios from "axios";
import { changeLoader } from "../Store/Slices/loader";
import { store } from "../Store/store";

const instance = axios.create({
    baseURL:" https://api.themoviedb.org/3",

})
//req
//layer between app and server 
instance.interceptors.request.use(
    (config) => {
        store.dispatch(changeLoader(true))
        return config;
       
    },
    (err) => {
        return Promise.reject(err);
       
    })
//     //res
    instance.interceptors.response.use(
        (config) => {
            store.dispatch(changeLoader(false))

            return config;
            
        },
        (err) => {
            console.log(err);
        }
    )


export default instance;