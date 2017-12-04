import { HomeComponent } from '../home';
import { NavbarComponent } from '../navbar';
import { Component, Vue } from 'vue-property-decorator';
import ServiceIdentifiers from '../../dependency-symbols';
import container from '../../dependency-config';

@Component({
    template: require('./app.html'),
    components: { navbar : NavbarComponent },
    provide: {
        [ServiceIdentifiers.CONTAINER]: container
      }
})
export class AppComponent extends Vue {
    
}