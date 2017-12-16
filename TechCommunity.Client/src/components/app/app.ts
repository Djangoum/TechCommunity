import { HomeComponent } from '../home';
import { NavbarComponent } from '../common/navbar';
import { Component, Vue } from 'vue-property-decorator';
import ServiceIdentifiers from '../../dependency-symbols';
import container from '../../dependency-config';
import { dispatchGetCurrentUser, mutateUser } from '../../store/system/index';
import { Ihttp } from '../../util/Ihttp';
import { Http } from '../../util/http';

@Component({
    template: require('./app.html'),
    components: { navbar : NavbarComponent },
    provide: {
        [ServiceIdentifiers.CONTAINER]: container
      }
})
export class AppComponent extends Vue {
    async mounted() {
        let user = await dispatchGetCurrentUser(this.$store);

        if (user !== null) {
            mutateUser(this.$store, user);

            let http: Ihttp = new Http();
            
            http.setDefaultHeader('Authorization', 'Bearer ' + user.access_token);
        }
    }
}