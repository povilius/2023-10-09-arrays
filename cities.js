const cities = [
  {
    name: 'Vilnius',
    population: 500000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Gedimino pilis', 'Rotušė', 'Televizijos bokštas'],
    isCapital: true,
  },
  {
    name: 'Milan',
    population: 5000000,
    location: {
      continent: 'Europe',
      country: 'Italy',
    },
    touristAttractions: ['Duomo, Cathedral of Milano', 'Castello Sforzesco', 'Galleria Vittorio Emanuele II', 'Brera Art Gallery', 'Teatro alla Scala'],
    isCapital: false,
  },
  {
    name: 'Toronto',
    population: 3000000,
    location: {
      continent: 'North America',
      country: 'Canada',
    },
    touristAttractions: ['CN Tower', 'Casa Loma', 'Toronto Zoo'],
    isCapital: false,
  },
  {
    name: 'Brasilia',
    population: 4000000,
    location: {
      continent: 'South America',
      country: 'Brasil',
    },
    touristAttractions: ['Pontao do Lago Sul', 'Catedral Metropolitana'],
    isCapital: true,
  },
  {
    name: 'Capetown',
    population: 1000000,
    location: {
      continent: 'Africa',
      country: 'South Africa',
    },
    touristAttractions: [],
    isCapital: true,
  },
  {
    name: 'Sydney',
    population: 7000000,
    location: {
      continent: 'Australia',
      country: 'Australia',
    },
    touristAttractions: ['Sydney Opera House'],
    isCapital: false,
  },
  {
    name: 'Tokyo',
    population: 9000000,
    location: {
      continent: 'Asia',
      country: 'Japan',
    },
    touristAttractions: ['Mount Fuji', 'Dotonburi, Osaka', 'Shirakawago Village'],
    isCapital: true,
  },
  {
    name: 'Porto',
    population: 700000,
    location: {
      continent: 'Europe',
      country: 'Portugal',
    },
    touristAttractions: ['Ribeira Square', 'Foz do Douro'],
    isCapital: false,
  },
  {
    name: 'Hamburg',
    population: 2000000,
    location: {
      continent: 'Europe',
      country: 'Germany',
    },
    touristAttractions: ['Hamburg Rathaus', 'Strandperle', 'Elbphilharmonie', 'Jenischpark'],
    isCapital: false,
  },
  {
    name: 'Copenhagen',
    population: 2000000,
    location: {
      continent: 'Europe',
      country: 'Denmark'
    },
    touristAttractions: ['Copenhagen Zoo', 'Den Blå Planet, National Aquarium Denmark', 'Amalienborg Palace', 'Bakken', 'Tivoli Gardens'],
    isCapital: true,
  },
]

function renderCities() {
  const citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    console.log(city)
    console.log(city.name)
    console.log(city.population)
    console.log(city.isCapital)
    console.log(city.location)
    console.log(city.location.continent)
    console.log(city.location.country)
  
    console.log(city.touristAttractions)
    console.log(city.touristAttractions.length)
  
    city.touristAttractions.forEach(attraction => {
      console.log(attraction)
    })

  const cityWrapper = document.createElement('div')
  cityWrapper.classList.add('city-wrapper')

  let capitalTitle = ''

  if (city.isCapital) {
    cityWrapper.classList.add('capital')
    capitalTitle = ' (capital)'
  }

  const cityTitle = document.createElement('h2')
  cityTitle.textContent = city.name + capitalTitle

  const cityDescription = document.createElement('p')
  cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.`

  cityWrapper.append(cityTitle, cityDescription)

  citiesList.append(cityWrapper)
})
}

renderCities()

function styleCities() {
  const citiesCapitals = document.querySelectorAll('.capital h2')

  citiesCapitals.forEach((capitalTitle) => {
    capitalTitle.style.color = 'green'
  })
}

styleCities()