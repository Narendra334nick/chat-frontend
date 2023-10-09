import axios from 'axios';
import config from '../config/config';
import constants from '../constant/constant';


const axiosInstance = axios.create({
  baseURL: `${config.app.baseUrl}/v1`,
});

axiosInstance.interceptors.request.use((req:any) => {
  const token = localStorage.getItem(constants.access_token);
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});
export const login = async (data:any) => {
  const res = await axiosInstance.post(`/basic/login`,data);
  return res && res.data ? res.data : null;
};