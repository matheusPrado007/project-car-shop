import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

carRoutes.get('/cars', (req, res) => new CarController(req, res).getAll());
carRoutes.get('/cars/:id', (req, res) => new CarController(req, res).getById());

export default carRoutes;