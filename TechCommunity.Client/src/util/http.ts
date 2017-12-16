import { injectable } from 'inversify';
import axios from 'axios';
import { Ihttp } from './Ihttp';

@injectable()
export class Http implements Ihttp {
    get = axios.get;
    post = axios.post;
    delete = axios.delete;
    head = axios.head;
    put = axios.put;
    patch = axios.patch;
    setDefaultHeader (key, value) {
        axios.defaults.headers.common[key] = value;
    }
}