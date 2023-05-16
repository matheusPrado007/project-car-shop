import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

carRoutes.get('/carS', (req, res) => new CarController(req, res).getAll());

export default carRoutes;