import { State } from '../state';
import { TechCommunityState } from './state';
import { ActionContext } from 'vuex';
import { Ihttp } from '../../util/Ihttp';
import { Http } from '../../util/http';
import { getConfiguration } from './index';

type Context = ActionContext<TechCommunityState, State>;

export default {
    async fetchValues(context: Context): Promise<any> {
        let http: Ihttp = new Http();

        return await http.get(getConfiguration(context).apiUri + '/api/values');
    }
};