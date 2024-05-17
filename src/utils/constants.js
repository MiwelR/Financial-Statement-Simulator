export const RESULT_MESSAGES = {
  liquidityRatios: {
    moreThanOne: 'Buena liquidez',
    equalToOne: 'Liquidez suficiente',
    lessThanOne: 'Liquidez insuficiente'
  },
  totalSolvency: {
    moreThanOne: 'Buena situación financiera',
    equalToOne: 'Equilibrio financiero justo, situación límite',
    lessThanOne: 'Riesgo de insolvencia, quiebra técnica'
  },
  coverageOfOwnFunds: {
    moreThanOne: 'Buena capacidad para financiar con capital propio',
    equalToOne: 'Equilibrio financiero justo',
    lessThanOne: 'Riesgo financiero, alta dependencia de la deuda'
  },
  coverageOfPermanentResources: {
    moreThanOne: 'Buena capacidad para financiar operaciones a largo plazo',
    equalToOne: 'Equilibrio financiero justo',
    lessThanOne: 'Riesgo financiero, alta dependencia de la deuda a largo plazo'
  },
  financingOfCurrentAssets: {
    moreThanOne:
      'Falta de liquidez y dependencia de financiación a corto plazo',
    equalToOne: 'Equilibrio justo',
    lessThanOne:
      'Buena capacidad para cubrir el pasivo a corto plazo con el activo circulante'
  }
}
