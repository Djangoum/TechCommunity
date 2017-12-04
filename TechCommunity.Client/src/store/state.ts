import { SystemState } from './system/state';
import { TechCommunityState } from './techcommunity/state';

export interface State {
    techcommunity: TechCommunityState;
    system: SystemState;
}