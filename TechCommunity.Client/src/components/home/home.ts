import Symbols from '../../dependency-symbols';
import { Component, Vue, Inject } from 'vue-property-decorator';
import { NavbarComponent } from '../navbar/navbar';
import { BaseComponent } from '../../util/baseComponent';
import { dispatchChallengeToken } from '../../store/system/index';


@Component({
    template: require('./home.html')
})
export class HomeComponent extends BaseComponent {
    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;
    
    constructor() {
        super();

        dispatchChallengeToken(this.$store, { username : "hola", password: "tonto"});
    }
}
