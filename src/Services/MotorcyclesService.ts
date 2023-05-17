import MotocyclesODM from '../Models/MotocycleODM';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcyclesService {
  private model: MotocyclesODM = new MotocyclesODM();

  public createMotorDomain(moto: IMotorcycle | null) {
    if (moto) {
      return new Motorcycles(moto);
    }
    return null;
  }

  public async createMoto(moto: IMotorcycle) {
    const newMoto = await this.model.createCar(moto);
    return this.createMotorDomain(newMoto);
  }

  public async getAll() {
    const cars = await this.model.getAll();
    const allCars = cars.map((moto) => this.createMotorDomain(moto as IMotorcycle));
    return allCars;
  }

  public async getById(id: string) {
    const moto = await this.model.getById(id);
    return this.createMotorDomain(moto);
  }
}