import { Model, model, models, Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async createCar(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(id: string) {
    return this.model.findById(id);
  }

  public async update(id: string, car: ICar): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...car } as UpdateQuery<ICar>,
      { new: true },
    );   
  }
}