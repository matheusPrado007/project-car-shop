import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcyclesServices from '../Services/MotorcyclesService';
import IMotorcycles from '../Interfaces/IMotorcycle';

const CREATED = 201;
const OK = 200;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;

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

  public async getAll() {
    const motorcycles = await this.service.getAll();
    return this.res.status(OK).json(motorcycles);
  }

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(UNPROCESSABLE).json({ message: 'Invalid mongo id' });
    }
    const moto = await this.service.getById(id);
    if (!moto) {
      return this.res.status(NOT_FOUND).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(OK).json(moto);
  }
}
