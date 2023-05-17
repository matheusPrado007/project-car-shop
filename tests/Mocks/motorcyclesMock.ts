import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../src/Domains/Motorcycle';

const motorcycleInput : IMotorcycle = {
  model: 'Chopper 59',
  year: 1959,
  color: 'Black',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  
};

const motorcycleList : IMotorcycle[] = [
  {
    id: '645591a44c9165ea452921c1',
    model: 'Harley-Davidson FXR Super',
    year: 2005,
    color: 'Black',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '64558fa94c9165ea452921bd',
    model: 'Harley-Davidson Road King',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  },
];

const motorcycleOutput = new Motorcycle({ id: '645591a44c9165ea452921c1', ...motorcycleInput });

export { motorcycleInput, motorcycleList, motorcycleOutput };