const https = require('https')

class CountriesService{
  getCountries() {
    const url = 'https://restcountries.eu/rest/v2/all'
    const promise = new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (rd) => data = data + rd);
        res.on('end', () => resolve(data));
        res.on('error', reject);
      })
    })
  
    return promise
      .then((data) => JSON.parse(data))
  }

  async getSouthAmericanCountries() {
    try {
      const result = await this.getCountries()

      return result
        .filter(country => country.subregion === 'South America')
        .map(country => country.name)
    
    } catch(error) {
      console.log('Error', error.message)
      return []
    }
  }
}

module.exports = new CountriesService()
