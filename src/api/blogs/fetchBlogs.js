import axios  from "axios";

const backendUrl = process.env.VUE_APP_BACKEND_URL;

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${backendUrl}/blogs`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        throw error;
    }
};
