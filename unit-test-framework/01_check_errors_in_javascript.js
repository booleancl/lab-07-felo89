const NumberToWord = require('../SUT/utils/numberToWord')

/*
  Esta clase genera una instancia que tiene el método "convert"
  Modo de uso:

  const instance = new NumberToWord()
  
  instance.convert(5000) <--- da como restultado el string "cinco mil"
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Pruebas manuales

  Generamos varias pruebas para revisar de forma manual o visual si funciona o no el algoritmo
*/
// const numberToWord = new NumberToWord()
// console.log(numberToWord.convert(21000))
// console.log(numberToWord.convert(31121051))
// console.log(numberToWord.convert(5000))
// console.log(numberToWord.convert(999))
// console.log(numberToWord.convert(25990))
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Prueba automatizada
  
  Prueba realizada utilizando programación.
  Estamos utilizando programación para corroborar 
*/


// const examples = [
//   { value: 5000, expected: 'cinco mil' },
//   { value: 999, expected: 'novecientos noventa y nueve' },
//   { value: 25990, expected: 'veinticinco mil novecientos noventa' },
//   { value: 21000, expected: 'veintiún mil' },
//   { value: 31121051, expected: 'treinta y un millones ciento veintiún mil cincuenta y uno' },
// ]

// const numberToWord = new NumberToWord()
// examples.forEach(({ value, expected }) => {
//   const newValue = numberToWord.convert(value)
//   if (newValue !== expected) {
//     const errorMessage = `❌ La prueba para el valor "${newValue}" falló. El valor esperado era "${expected}"`
//     console.log(errorMessage)
//     //  throw new Error(errorMessage)
//   }
// })
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Prueba automatizada con Expresiones "semánticas": Aserciones
  
  Prueba realizada utilizando programación.
  Queremos construir una función llamada "expect" que realice una "Aserción"
  Una aserción es una expresión que define una aseveración que puede ser validada o rechazada.
  Ejemplos:

    10 > 5 <--- 10 es mayor que 5
    Si convierto 5000 a palabras entonces debería ser "cinco mil"
    
  Para implementar una aserción en Javascript la dividiremos en 2 partes.
  Primero creamos una función llamada "expect"

  const testValue = 200
  const expectedValue = 'doscientos'
  
  expect(testValue) ---> retorna un objeto

  Este objeto de retorno haremos que tenga un método llamado .toEqual().
  Este método recibirá el valor esperado a comparar. En caso 
  de fallar la comparación obtendremos un error en la terminal

  Luego de este segundo paso la función quedará así


  // Espero que el valor de prueba sea igual al valor esperado
  expect(testValue).toEqual(expectedValue) <-- arroja error si no se cumple la comparación

  // Totalmente semántico!! Si bien estamos programando, esta forma de realizar Aserciciones podría permitir inclusive a personas que no sepan mucho de progración escribirlas y entenderlas
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++         MINI FRAMEWORK DE PRUEBAS                              ++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function expect(testValue) {
  // OJO en algo muy interesante en este objeto literal. Utilizan el valor testValue. ¿Por qué nos debería llamar la atención esto?
  const comparatorFunctions = {
    toEqual(expectedValue) {
      if (testValue !== expectedValue) {
        throw new Error()
      }
    },
    toHaveLength(expectedValue) {
      if (testValue.length !== expectedValue) {
        throw new Error()
      }
    },
  }
  // Esto permita que quien use expect pueda decidir el comparador que usa según sea el caso
  return comparatorFunctions
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++         El Principio AAA                                       ++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Preparación - Arrange
  // const numberToWord = new NumberToWord()

  // // Ejecución de la acción - Act

  // //const result = numberToWord.convert(5000)
  // const result = numberToWord.convert(21000)

  // // Corroboración de los resultados - Assert ¿Qué es una Aserción?
  // //expect(result).toEqual('cinco mil')
  // expect(numberToWord.convert(21000)).toEqual('veintiún mil')
  //expect([1,2,4]).toHaveLength(3)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++         Utilizando la utilidad de pruebas                      ++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function test() {
  const numberToWord = new NumberToWord()
  const examples = [
    { value: 5000, expected: 'cinco mil' },
    { value: 999, expected: 'novecientos noventa y nueve' },
    { value: 25990, expected: 'veinticinco mil novecientos noventa' },
    { value: 21000, expected: 'veintiún mil' },
    { value: 31121051, expected: 'treinta y un millones ciento veintiún mil cincuenta y uno' },
  ]
  examples.forEach(({ value, expected }) => {
    
    const testValue = numberToWord.convert(value)

    try {
      expect(testValue).toEqual(expected)

      console.log(`✅ La prueba de comparación entre "${testValue}" y "${expected}" fue exitosa`)
    } catch(error) {
      console.log(error.message)
      console.error(`❌ La prueba para el valor "${testValue}" falló. El valor esperado era "${expected}"`)
    }
  })
}

test()
