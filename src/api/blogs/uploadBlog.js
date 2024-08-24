import axios from "axios";

const backendUrl = process.env.VUE_APP_BACKEND_URL;

export const uploadBlog = async(newBlog) =>{
    try{
        const response = axios.post(`${backendUrl}/blogs`,newBlog);
        console.log(response);
    }catch (error){
        console.log("Fail to uplaod blog",error);
        throw error;
    }

}