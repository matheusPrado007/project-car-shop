import ICar from '../../src/Interfaces/ICar';
import Car from '../../src/Domains/Car';

const carInput : ICar = {
  model: 'Ford F100',
  year: 1998,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carList : ICar[] = [
  {
    id: '6455872c4c9165ea452921ba',
    model: 'Chevy Impala',
    year: 1967,
    color: 'Black',
    status: true,
    buyValue: 20.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '64558fa94c9165ea452921bd',
    model: 'Camaro',
    year: 1960,
    color: 'Red',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const carOutput = new Car({ id: '6455872c4c9165ea452921ba', ...carInput });

export { carInput, carList, carOutput };