import axios from "axios";

//import { Error } from "@/types/api";
const BASE_URL = "https://booking-com15.p.rapidapi.com/api/v1/";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export default axiosInstance;