import { Router } from 'express'; // importação apenas da parte do roteamento.
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

//
// Students
//

routes.post('/students', StudentsController.store);

routes.use(authMiddleware);

routes.put('/students/:id', StudentsController.update);

// module.exports = routes;
export default routes;
