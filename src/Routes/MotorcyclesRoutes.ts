import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post(
  '/motorcycles',
  (req, res) => new MotorcyclesController(req, res).create(),
);

motorcyclesRoutes.get(
  '/motorcycles',
  (req, res) => new MotorcyclesController(req, res).getAll(),
);

motorcyclesRoutes.get(
  '/motorcycles/:id',
  (req, res) => new MotorcyclesController(req, res).getById(),
);

motorcyclesRoutes.put(
  '/motorcycles/:id',
  (req, res) => new MotorcyclesController(req, res).updateById(),
);

export default motorcyclesRoutes;