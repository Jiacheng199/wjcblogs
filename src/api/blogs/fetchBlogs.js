import axios  from "axios";

const backendUrl = process.env.VUE_APP_BACKEND_URL;

//get all blogs in db
export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${backendUrl}/blogs`);
        return response.data;
    } catch (error) {
        console.log("Failed to fetch blogs",error);
        throw error;
    }
};

//get a blog by the given blog id
export const fetchBlogByID = async(id) => {
    try{
        const response = await axios.get(`${backendUrl}/blogs/${id}`);
        return response.data;
    }catch (error){
        console.log("Failed to fetch blog by id:",error);
        throw error;
    }
}