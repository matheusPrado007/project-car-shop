import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post(
  '/motorcycles',
  (req, res) => new MotorcyclesController(req, res).create(),
);

export default motorcyclesRoutes;