import express from 'express';
import carRoutes from './Routes/CarRoutes';
import motorcyclesRoutes from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcyclesRoutes);

export default app;
