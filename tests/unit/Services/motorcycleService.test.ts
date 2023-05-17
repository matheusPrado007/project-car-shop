import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcyclesService';
import { motorcycleInput, motorcycleOutput, motorcycleList } from '../../Mocks/motorcyclesMock';

const service = new MotorcycleService();
describe('Testando a rota /motorcycle', function () {
  afterEach(sinon.restore);
  describe('Testa POST /motorcycle', function () {
    it('Testa se é possível criar um nova moto', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);
      const result = await service.createMoto(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });
  describe('Testa GET - /motorcycle -', function () {
    it('Teste se getAll() retorna todos motorcycles ', async function () {
      sinon.stub(Model, 'find').resolves(motorcycleList);
      const result = await service.getAll();

      expect(result).to.be.deep.equal(motorcycleList);
    });
  });

  describe('Testa GET /motorcycle/id', function () {
    it('Testa se retorna motorcycle correspondente ao id', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleOutput);
      const result = await service.getById('6455872c4c9165ea452921ba');
  
      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });
});