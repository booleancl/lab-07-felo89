const NumberToWords = require('../SUT/utils/numberToWord')

const converter = new NumberToWords()

describe('Number to words utility', () => {
    const examples = [
      { value: 5000, expected: 'cinco mil' },
      { value: 999, expected: 'novecientos noventa y nueve' },
      { value: 25990, expected: 'veinticinco mil novecientos noventa' },
      { value: 21000, expected: 'veintiún mil' },
      { value: 31121051, expected: 'treinta y un millones ciento veintiún mil cincuenta y uno' },
    ]
  examples.forEach((example) => 
    it(`✅ La prueba de comparación entre "${example.value}" y "${example.expected}" fue exitosa`, () => {
      expect(converter.convert(example.value)).toBe(example.expected)
    })
  )
})