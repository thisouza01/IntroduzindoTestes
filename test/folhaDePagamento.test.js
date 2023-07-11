import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes dos cálculos de folha', () => {
  it('must return the sum of extra hours', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('must discount the value of salary', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    expect(retornado).toBe(esperado);
  });
});
