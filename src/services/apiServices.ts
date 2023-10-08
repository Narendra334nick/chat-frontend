import axios from 'axios';
import config from '../config/config';
import constants from '../constant/constant';

let axiosInstance : any;

export const getAxiosInstance = async (data:any) => {
  axiosInstance = axios.create({
    baseURL: `${config.app.baseUrl}`,
    timeout: config.app.timeout,
  });

  axiosInstance.interceptors.request.use((req:any) => {
    const token = localStorage.getItem(constants.access_token);
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
};
export const login = async (data:any) => {
  const res = await axiosInstance.post(`/basic/login`,data);
  return res && res.data ? res.data : null;
};

// export const addPay = async data => {
//   const path = `/${UrlEndPoints.addPayment}`;
//   const res = await paymentInstance.post(path, data);
//   return res && res.data ? res.data : null;
// };