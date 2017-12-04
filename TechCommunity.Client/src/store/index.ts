import { State } from './state';
import { techcommunitystore as TechCommunityStore } from './techcommunity';
import { ActionContext, Store } from 'vuex';
import { systemstore as SystemStore } from './system/index';

export const createStore = () => new Store<State>({
    modules: {
        TechCommunityStore,
        SystemStore,
    },
});