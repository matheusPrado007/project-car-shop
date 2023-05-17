import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycles extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto:IMotorcycles) {
    super(moto);
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status || false;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public setId(id: string) { this.id = id; }
  public getId() { return this.id; }

  public setModel(model: string) { this.model = model; }
  public getModel() { return this.model; }

  public setYear(year: number) { this.year = year; }
  public getYear() { return this.year; }

  public setColor(color: string) { this.color = color; }
  public getColor() { return this.color; }

  public setStatus(status: boolean) { this.status = status; }
  public getStatus() { return this.status; }

  public setBuyValue(value: number) { this.buyValue = value; }
  public getBuyValue() { return this.buyValue; }

  public setCategory(category: string) { this.category = category; }
  public getCategory() { return this.category; }

  public setEngineCapacity(ec: number) { this.engineCapacity = ec; }
  public getEngineCapacity() { return this.engineCapacity; }
}