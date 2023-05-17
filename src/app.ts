import express from 'express';
import carRoutes from './Routes/CarRoutes';
import motorcyclesRoutes from './Routes/motorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcyclesRoutes);

export default app;
