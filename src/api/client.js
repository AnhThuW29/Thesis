import axios from "axios"
import e from "cors";

// Cấu hình chung cho axios
const axiosClient = axios.create({
    baseURL: 'http://192.168.88.107:8000/',
    headers: {
        'content-type': 'application/json'
    }

})

//Xử lý response trả về
axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error.response;
    },
);

export default axiosClient;