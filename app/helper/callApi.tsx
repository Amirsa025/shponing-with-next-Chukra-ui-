import axios from "axios";
import React from 'react';

const CallApi = () => {
   const axiosInstance = axios.create({
       baseURL : 'http://localhost:5000/api'
   })
    axiosInstance.interceptors.request.use(
        config=>config,
        err =>Promise.reject(err)
    )
    axiosInstance.interceptors.request.use(
        res=>res,
        error=>Promise.reject(error)
    )

    return axiosInstance
};

export default CallApi;

