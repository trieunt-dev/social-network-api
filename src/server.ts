import { IndexRoute } from '@modules/index';
import App from './app';
console.log(IndexRoute);
const routes = [new IndexRoute()];
const app = new App(routes);
app.listen();
