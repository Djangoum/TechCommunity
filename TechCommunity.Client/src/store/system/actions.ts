import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { Ihttp } from '../../util/Ihttp';
import { State } from '../state';
import { SystemState } from './state';
import { ActionContext } from 'vuex';
import { Http } from '../../util/http';
import { getOidcConfiguration, dispatchGetCurrentUser } from './index';

type SystemContext = ActionContext<SystemState, State>;

export default {
    async challengeToken(context: SystemContext): Promise<void> {
        let managerSettings: UserManagerSettings = getOidcConfiguration(context);
        
        let userManager = new UserManager(managerSettings);
        
        userManager.signinRedirect();
    },
    async getCurrentUser(context: SystemContext): Promise<User> {
        let managerSettings: UserManagerSettings = getOidcConfiguration(context);
                
        let userManager = new UserManager(managerSettings);

        return userManager.getUser();
    },
    async logout(context: SystemContext): Promise<any> {
        let managerSettings: UserManagerSettings = getOidcConfiguration(context);
        
        let userManager = new UserManager(managerSettings);
        

        let result = await dispatchGetCurrentUser(context);
        
        if (result !== null) {
            return userManager.signoutRedirect();
        }

        return Promise.resolve();
    },
    async receiveSigninCallback(context: SystemContext): Promise<User> {
        let managerSettings: UserManagerSettings = getOidcConfiguration(context);
        
        let userManager = new UserManager(managerSettings);
        
        return userManager.signinRedirectCallback();
    },
    async receiveSignoutCallback(context: SystemContext): Promise<any> {
        let managerSettings: UserManagerSettings = getOidcConfiguration(context);
        
        let userManager = new UserManager(managerSettings);
        
        return Promise.resolve();
    }
};