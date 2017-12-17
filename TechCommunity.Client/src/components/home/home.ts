import { dispatchChallengeToken, dispatchLogout, dispatchGetCurrentUser } from '../../store/system';
import Symbols from '../../dependency-symbols';
import { Component, Vue, Inject } from 'vue-property-decorator';
import { BaseComponent } from '../../util/baseComponent';
import { User } from 'oidc-client';
import { dispatchFetchValues } from '../../store/techcommunity/index';

@Component({
    template: require('./home.html')
})
export class HomeComponent extends BaseComponent {
    
    constructor() {
        super();       
    }

    output: string = '';

    protected async register() {
        let result = await dispatchGetCurrentUser(this.$store);       
        this.output += result.profile;
    }

    protected async api() {
        let result = await dispatchFetchValues(this.$store);

        this.output += result.data;
    }
}