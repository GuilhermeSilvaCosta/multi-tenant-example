import { Router } from 'express';
import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.post('/clients', ClientController.store)

export default routes;