import { Endpoints } from '../utils/endPoint.js';
import {AxiosReqHandlers} from './client_axios.js';

export class Authservice{
    static signup = (data) => {
    const config= { ...Endpoints.signup, data };
    return AxiosReqHandlers.apiRequest(config);
  };
}