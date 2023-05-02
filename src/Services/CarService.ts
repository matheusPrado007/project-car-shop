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
}