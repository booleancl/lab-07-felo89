/*
  Si ejecutamos directamente este script con:

  node unit-test-framework/02_handle_async_in_tests.js

  falla porque la función expect no existe. Esto es porque en primer lugar
  esta está declarada en otro archivo. Tomaremos el código de la función "expect" que escribimos en el ejercicio anterior y lo moveremos a la raíz del proyecto a un archivo llamado test-setup.js. 
  En este en vez de hacer module.exports haremos
  
  global.expect = expect

  Esto permitirá definir expect como una función global. Para que utilicemos expect sin problemas debemos ejecutar

  node --require ./test-setup.js unit-test-framework/02_handle_async_in_tests.js

  Acá la descripción de que significa la opción --require
  https://nodejs.org/api/cli.html#cli_r_require_module

*/

const countriesService = require('../SUT/services/countries')

async function test() {
  // Fuente https://restcountries.eu/rest/v2/all
  const countriesResponse = [
    { id: 1, name: 'Chile', region: 'America', subregion: 'South America'},
    { id: 2, name: 'Germany', region: 'Europe', subregion: 'Western Europe'},
    { id: 3, name: 'Argentina', region: 'America', subregion: 'South America'},
    { id: 4, name: 'Belgium', region: 'Europe', subregion: 'Western Europe'},
    { id: 5, name: 'Bolivia', region: 'America', subregion: 'South America'},
  ]
  //  const countriesResponse = require('./fixtures/countries-all.json')
  //countriesService.getCountries = () => Promise.resolve(countriesResponse)
  
  const expected = ['Chile', 'Argentina', 'Bolivia']

  let testValue

  try {
    testValue = await countriesService.getSouthAmericanCountries()
  
    // expect(testValue[0]).toEqual(expected[0])
    // expect(testValue[1]).toEqual(expected[1])
    // expect(testValue[2]).toEqual(expected[2])

    // El problema de la comparación de tipos de datos estructurales (Objetos y Arreglos)
    // ¿Qué pasa si intentamos lo siguiente?
    expect(testValue).toEqual(expected)

    console.log(`✅ La prueba de comparación entre "${testValue}" y "${expected}" fue exitosa`)
  } catch(error) {
    console.error('ERROR', error.message)
    console.error(`❌ La prueba para el valor "${testValue}" falló. El valor esperado era "${expected}"`)
  }
}

test()
