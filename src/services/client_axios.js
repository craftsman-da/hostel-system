import axios, { AxiosRequestConfig } from 'axios';

export class AxiosReqHandlers {
  static basePath = 'https://hostel-alloc-backend.onrender.com/api';

  static API = axios.create({
    baseURL: `${this.basePath}/`,
    timeout: 60000,
  });

  /**
   *  Making requests to authorized url
   * */

  static apiRequest = async (config) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.API(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static bearerTokenSetter = (token) => {
    token
      ? (this.API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
      : delete this.API.defaults.headers.common['Authorization'];
  };
}

AxiosReqHandlers.API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosReqHandlers.API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
