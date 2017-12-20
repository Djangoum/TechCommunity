import { SystemState } from './state';
import { User } from 'oidc-client';

export default {
    setUser(state: SystemState, user: User) {
        state.user = user;
    }
};