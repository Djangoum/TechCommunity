import { State } from '../state';
import { SystemState } from './state';
import { ActionContext } from 'vuex';

type SystemContext = ActionContext<SystemState, State>;

export default {
    async challengeToken(context: SystemContext, payload: { username: string, password: string }): Promise<void> {
        
    }
};