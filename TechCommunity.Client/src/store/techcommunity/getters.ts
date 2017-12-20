import { TechCommunityState } from './state';
import IConfiguration from '../models/IConfiguration';

export default {
    getConfiguration(state: TechCommunityState): IConfiguration {
        return {
            apiUri: 'http://localhost:5001/',
            authorityUri: 'http://localhost:5000/'
        };
    }
};