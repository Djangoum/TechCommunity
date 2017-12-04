import { Vue, Inject } from 'vue-property-decorator';
import { Ihttp } from './Ihttp';
import ServicesIdentifiers from '../dependency-symbols';
import { Container } from 'inversify';

export abstract class BaseComponent extends Vue {
    protected axios: Ihttp;
    
    constructor() {
        super();
    }

    @Inject(ServicesIdentifiers.CONTAINER)
    private _container: Container;

    protected beforeCreate() {
        this.axios = this._container.get<Ihttp>(ServicesIdentifiers.HTTP);
    }
}