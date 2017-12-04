import { SystemState } from './state';

export default {
    setToken(state: SystemState, token: string) {
        state.token = token;
    }
};