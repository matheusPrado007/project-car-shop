import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

const CREATED = 201;
const OK = 200;

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async create() {
    const {
      id,
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      doorsQty,
      seatsQty,
    } = this.req.body;

    const car: ICar = {
      id,
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      doorsQty,
      seatsQty,
    };
    const newCar = await this.service.createCar(car);
    return this.res.status(CREATED).json(newCar);
  }

  public async getAll() {
    const cars = await this.service.getAll();
    return this.res.status(OK).json(cars);
  }
}