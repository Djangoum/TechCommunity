import axios from 'axios';
import { injectable } from 'inversify';
import { Ihttp } from './Ihttp';

@injectable()
export class Http implements Ihttp {
    get = axios.get;
    post = axios.post;
    delete = axios.delete;
    head = axios.head;
    put = axios.put;
    patch = axios.patch;
}