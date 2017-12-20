import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import { SystemState } from './state';
import { State } from '../state';
import { getStoreAccessors } from 'vuex-typescript';

export const systemstore =  {
    namespaced: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: new SystemState()
};

const { commit, read, dispatch } =
getStoreAccessors<SystemState, State>('SystemStore');

export const dispatchChallengeToken = dispatch(actions.challengeToken);
export const dispatchLogout = dispatch(actions.logout);
export const dispatchSigninCallback = dispatch(actions.receiveSigninCallback);
export const dispatchSignoutCallback = dispatch(actions.receiveSignoutCallback);
export const dispatchGetCurrentUser = dispatch(actions.getCurrentUser);

export const mutateUser = commit(mutations.setUser);

export const getOidcConfiguration = read(getters.getOidcConfiguration);
export const getCurrentUser = read(getters.getCurrentUser);