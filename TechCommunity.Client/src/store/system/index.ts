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
getStoreAccessors<SystemState, State>('system');

export const dispatchChallengeToken = dispatch(actions.challengeToken);

export const mutateToken = commit(mutations.setToken);