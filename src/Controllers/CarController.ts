import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

const CREATED = 201;
const OK = 200;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;

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

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(UNPROCESSABLE).json({ message: 'Invalid mongo id' });
    }
    const car = await this.service.getById(id);
    if (!car) {
      return this.res.status(NOT_FOUND).json({ message: 'Car not found' });
    }
    return this.res.status(OK).json(car);
  }

  public async updateById() {
    const { id } = this.req.params;
    const {
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
    if (!isValidObjectId(id)) {
      return this.res.status(UNPROCESSABLE).json({ message: 'Invalid mongo id' });
    }
    const updateCar = await this.service.update(id, car);
    if (!updateCar) {
      return this.res.status(NOT_FOUND).json({ message: 'Car not found' });
    }
    return this.res.status(OK).json(car);
  }
}
