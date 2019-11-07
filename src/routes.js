import { Router } from 'express'; // importação apenas da parte do roteamento.
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.put('/users', UserController.store);

// module.exports = routes;
export default routes;
