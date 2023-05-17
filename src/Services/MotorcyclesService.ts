import MotocyclesODM from '../Models/MotocycleODM';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcyclesService {
  private model: MotocyclesODM = new MotocyclesODM();

  public createCarDomain(moto: IMotorcycle | null) {
    if (moto) {
      return new Motorcycles(moto);
    }
    return null;
  }

  public async createMoto(moto: IMotorcycle) {
    const newMoto = await this.model.createCar(moto);
    return this.createCarDomain(newMoto);
  }
}