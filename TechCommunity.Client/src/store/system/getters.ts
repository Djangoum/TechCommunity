import { SystemState } from './state';
import { UserManagerSettings, User } from 'oidc-client';

export default {
    getOidcConfiguration(state: SystemState): UserManagerSettings {
        return  {
            authority: 'http://localhost:5000',
            client_id: 'js',
            redirect_uri: 'http://localhost:8080/signin-oidc',
            response_type: 'id_token token',
            scope: 'openid profile api1',
            post_logout_redirect_uri: 'http://localhost:8080/signout-oidc',
            popupWindowFeatures: 'menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes',        
            // this will toggle if profile endpoint is used
            loadUserInfo: true,
        
            // silent renew will get a new access_token via an iframe 
            // just prior to the old access_token expiring (60 seconds prior)
            silent_redirect_uri: window.location.origin + '/silent.html',
            automaticSilentRenew: true,
        
            // will revoke (reference) access tokens at logout time
            revokeAccessTokenOnSignout: true,
        
            // this will allow all the OIDC protocol claims to be visible in the window. normally a client app 
            // wouldn't care about them or want them taking up space
            filterProtocolClaims: false
        };
    },
    getCurrentUser(state: SystemState): User {
        return state.user;
    }
};