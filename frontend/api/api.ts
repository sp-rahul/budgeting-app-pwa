import {AxiosRequestConfig, AxiosResponse} from 'axios';
import axiosInstance from '@/public/axios/axiosInstance';

/** Axios catch block handler */
const errorHandler = (error: {response: any; request?: any; message?: any}) => {
  throw error;
};

function apiGet<T = any>(apiPath: string, config: AxiosRequestConfig = {}) {
  return axiosInstance
    .get(apiPath, config)
    .then((response: AxiosResponse<T>) => response)
    .catch(errorHandler);
}

function apiPost<R = any, T = any>(
  apiPath: string,
  data?: R,
  config: AxiosRequestConfig = {},
) {
  return axiosInstance
    .post(apiPath, data, config)
    .then((response: AxiosResponse<T>) => response)
    .catch(errorHandler);
}

function apiDelete<T = any>(apiPath: string, config: AxiosRequestConfig = {}) {
  return axiosInstance
    .delete(apiPath, config)
    .then((response: AxiosResponse<T>) => response)
    .catch(errorHandler);
}

function apiPut<R = any, T = any>(apiPath: string, data?: R) {
  return axiosInstance
    .put(apiPath, data)
    .then((response: AxiosResponse<T>) => response)
    .catch(errorHandler);
}

function apiPatch<R = any, T = any>(apiPath: string, data?: R) {
  return axiosInstance
    .patch(apiPath, data)
    .then((response: AxiosResponse<T>) => response)
    .catch(errorHandler);
}

export {apiGet, apiPost, apiDelete, apiPut, apiPatch};
