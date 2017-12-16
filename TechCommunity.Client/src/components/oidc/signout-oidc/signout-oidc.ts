import { dispatchChallengeToken, dispatchLogout, dispatchGetCurrentUser, dispatchSigninCallback, dispatchSignoutCallback } from '../../../store/system';
import Symbols from '../../../dependency-symbols';
import { Component, Vue, Inject } from 'vue-property-decorator';
import { BaseComponent } from '../../../util/baseComponent';
import { User, UserManager, UserManagerSettings } from 'oidc-client';

@Component({
    template: require('./signout-oidc.html')
})
export class SignOutOidcComponent extends BaseComponent {
    async mounted () {
         let result = await dispatchSignoutCallback(this.$store);

         window.location.href = '/';
    }
}