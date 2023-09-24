import { BadRequestException, Injectable } from '@nestjs/common';
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
    if (
      miles.quantMiles % 1000 != 0 ||
      miles.desconto < 0 ||
      miles.desconto > 80 ||
      miles.bonus < 0 ||
      miles.bonus > 300
    ) {
      throw new BadRequestException('Something bad happened ', {
        cause: new Error(),
        description: 'Valores de dados invalidos!',
      });
    }

    calcMiles.quantMiles = miles.quantMiles;
    calcMiles.desconto = miles.desconto;
    calcMiles.valor_desconto = 70 * (1 - miles.desconto / 100);
    calcMiles.bonus = miles.bonus;
    calcMiles.milhasBonus = miles.quantMiles * (miles.bonus / 100);
    calcMiles.milhasTotais = miles.quantMiles + calcMiles.milhasBonus;
    calcMiles.valorTotal = calcMiles.valor_desconto;
    calcMiles.valorFinal =
      calcMiles.valorTotal / (calcMiles.milhasTotais / 1000);

    return {
      'valor Ref.': `R$ ${calcMiles.valorRef.toFixed(2)}/milheiro`,
      'Milhas Comprar': calcMiles.quantMiles,
      Desconto: `${calcMiles.desconto}%`,
      'Valor com desc.': `R$ ${calcMiles.valor_desconto.toFixed(2)}/milheiro`,
      Bônus: `${calcMiles.bonus}%`,
      'Milhas de Bônus': calcMiles.milhasBonus,
      'Milhas Totais': calcMiles.milhasTotais,
      'Valor Total': `R$ ${calcMiles.valorTotal.toFixed(2)}`,
      'VALOR FINAL MILHEIRO': `>> R$ ${calcMiles.valorFinal.toFixed(2)} <<`,
      'Classificação da Compra': 'Excelente :)',
      Reconmendação: 'Pode Comprar',
    };
  }
}
