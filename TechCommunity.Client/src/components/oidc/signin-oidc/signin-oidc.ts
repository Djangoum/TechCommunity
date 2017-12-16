import { dispatchChallengeToken, dispatchLogout, dispatchGetCurrentUser, dispatchSigninCallback } from '../../../store/system';
import Symbols from '../../../dependency-symbols';
import { Component, Vue, Inject } from 'vue-property-decorator';
import { BaseComponent } from '../../../util/baseComponent';
import { User, UserManager, UserManagerSettings } from 'oidc-client';

@Component({
    template: require('./signin-oidc.html')
})
export class SignInOidcComponent extends BaseComponent {
    async mounted () {
         let result = await dispatchSigninCallback(this.$store);
         
         window.location.href = '/';
    }
}