import { Router } from 'express'; // importação apenas da parte do roteamento.
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// module.exports = routes;
export default routes;
