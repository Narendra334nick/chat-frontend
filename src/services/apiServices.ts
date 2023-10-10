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

export const getGroupsMessages = async (id:Number) => {
  const res = await axiosInstance.get(`/groups/messages/${id}`);
  return res && res.data ? res.data : null;
};

export const getUsers = async () => {
  const res = await axiosInstance.get(`/admin/user`);
  return res && res.data ? res.data : null;
};

export const createUser = async (data:any) => {
  const res = await axiosInstance.post(`/admin`,data);
  return res && res.data ? res.data : null;
};

export const updateUser = async (data:any) => {
  const res = await axiosInstance.put(`/admin/updateUser`,data);
  return res && res.data ? res.data : null;
};