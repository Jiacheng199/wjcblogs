import axios from "axios";

const backendUrl = process.env.VUE_APP_BACKEND_URL;

export const uploadBlog = async(newBlog) =>{
    try{
        const config = {
            headers: {}
        };
        //get jwt token 
        const token = sessionStorage.getItem('access_token');
        config.headers['Authorization'] = `Bearer ${token}`;

        const response = axios.post(`${backendUrl}/blogs`,newBlog,config);
        console.log(response);
    }catch (error){
        console.log("Fail to uplaod blog",error);
        throw error;
    }

}