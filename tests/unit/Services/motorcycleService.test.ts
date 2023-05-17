import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcyclesService';
import { motorcycleInput, motorcycleOutput } from '../../Mocks/motorcyclesMock';

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
});