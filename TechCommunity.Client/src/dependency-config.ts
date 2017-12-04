import { Http } from './util/http';
import ServiceIdentifiers from './dependency-symbols';
import { Container } from 'inversify';
import { Ihttp } from './util/Ihttp';

let container: Container = new Container();

container.bind<Ihttp>(ServiceIdentifiers.HTTP).to(Http);

export default container;