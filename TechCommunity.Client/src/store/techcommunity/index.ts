import { State } from '../state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import { TechCommunityState } from './state';
import { getStoreAccessors } from 'vuex-typescript';

export const techcommunitystore =  {
    namespaced: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: new TechCommunityState()
};

const { commit, read, dispatch } = 
getStoreAccessors<TechCommunityState, State>('TechCommunityStore');

export const getConfiguration = read(getters.getConfiguration);

export const dispatchFetchValues = dispatch(actions.fetchValues);