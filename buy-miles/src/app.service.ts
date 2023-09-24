import { Injectable } from '@nestjs/common';
import { milesDto } from './dtos/miles.dto';

const calcMiles = {
  valorRef: 70,
  quantMiles: 0,
  desconto: 0,
  valor_desconto: 0,
  bonus: 0,
  milhasBonus: 0,
  milhasTotais: 0,
  valorTotal: 0,
  valorFinal: 0,
};

@Injectable()
export class AppService {
  postMiles(miles: milesDto) {
    calcMiles.quantMiles = miles.quantMiles;
    calcMiles.desconto = miles.desconto;
    calcMiles.valor_desconto = 70 * (1 - miles.desconto / 100);
    calcMiles.bonus = miles.bonus;
    calcMiles.milhasBonus = miles.quantMiles;

    return {
      valorRef: `R$ ${calcMiles.valorRef},00/milheiro`,
      milhasComprar: `R$ ${calcMiles.milhasBonus},00/ilheiro`,
    };
  }
}
