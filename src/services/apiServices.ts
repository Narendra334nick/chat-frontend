import axios from 'axios';
import config from '../config/config';
import constants from '../constant/constant';
import { getItemFromLocalStorage } from './storege';

const timeoutMilliseconds = 10 * 60 * 1000; // 10 minutes
const baseURL = `${config.app.baseUrl}/v1`;

let axiosInstance = axios.create({
  baseURL: baseURL,
  timeout:timeoutMilliseconds,
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

axiosInstance.interceptors.request.use(async (req:any) => {
  const token = await getItemFromLocalStorage(constants.access_token);
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = async (data:any) => {
  const res = await axiosInstance.post(`/login/basic`,data);
  return res && res.data ? res.data : null;
};

export const getGroups = async () => {
  const res = await axiosInstance.get(`/groups`);
  return res && res.data ? res.data : null;
};