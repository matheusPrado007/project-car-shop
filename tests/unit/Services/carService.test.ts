import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
import { carInput, carList, carOutput } from '../../Mocks/carMock';

const service = new CarService();
describe('Testando a rota /cars', function () {
  afterEach(sinon.restore);
  describe('Testa POST /cars', function () {
    it('Testa se é possível criar um novo Carro', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
      const result = await service.createCar(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('Testa GET - /cars -', function () {
    it('Teste se getAll() retorna todos carros ', async function () {
      sinon.stub(Model, 'find').resolves(carList);
      const result = await service.getAll();

      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('Testa GET /cars/id', function () {
    it('Testa se retorna car correspondente ao id', async function () {
      sinon.stub(Model, 'findById').resolves(carOutput);
      const result = await service.getById('6455872c4c9165ea452921ba');
  
      expect(result).to.be.deep.equal(carOutput);
    });
  });
  
  describe('Testa PUT /cars/id', function () {
    it('Testa se altera carro pelo id', async function () {
      const update = sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
  
      await service.update('644cbf6d793fefd3bb95d9d8', carInput);
  
      expect(update.calledOnce).to.be.deep.equal(true);
    });
  });
});