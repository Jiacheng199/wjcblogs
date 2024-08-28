import axios from "axios";

const backendUrl = process.env.VUE_APP_BACKEND_URL;

export const deleteBlog = async(id) =>{
    try{
        const config = {
            headers: {}
        };
        //get jwt token
        const token = sessionStorage.getItem('access_token');
        config.headers['Authorization'] = `Bearer ${token}`;
        
        const response = axios.delete(`${backendUrl}/blogs/${id}`, config);
        console.log("response: ",response);
    }catch (error){
        console.log("Failed to delete blog",error);
        throw error;
    }
}