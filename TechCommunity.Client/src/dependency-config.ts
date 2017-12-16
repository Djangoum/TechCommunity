import { Container } from 'inversify';
import { Http } from './util/http';
import 'reflect-metadata';
import ServiceIdentifiers from './dependency-symbols';
import { Ihttp } from './util/Ihttp';

let container: Container = new Container();

container.bind<Ihttp>(ServiceIdentifiers.HTTP).to(Http);

export default container;