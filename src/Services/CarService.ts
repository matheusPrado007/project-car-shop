import CarsODM from '../Models/CarsODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private model: CarsODM = new CarsODM();

  public createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.model.createCar(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const cars = await this.model.getAll();
    const allCars = cars.map((car) => this.createCarDomain(car as ICar));
    return allCars;
  }

  public async getById(id: string) {
    const car = await this.model.getById(id);
    return this.createCarDomain(car);
  }

  public async update(id: string, body: ICar) {
    const car = await this.model.update(id, body);
    return this.createCarDomain(car);
  }
}