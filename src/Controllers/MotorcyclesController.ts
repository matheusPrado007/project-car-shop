import { Request, Response } from 'express';
import MotorcyclesServices from '../Services/MotorcyclesService';
import IMotorcycles from '../Interfaces/IMotorcycle';

const CREATED = 201;

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private service: MotorcyclesServices;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;

    this.service = new MotorcyclesServices();
  }

  public async create() {
    const {
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      category,
      engineCapacity,
    } = this.req.body;
    
    const moto: IMotorcycles = {
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      category,
      engineCapacity,
    };
    const newMoto = await this.service.createMoto(moto);
    return this.res.status(CREATED).json(newMoto);
  }
}
