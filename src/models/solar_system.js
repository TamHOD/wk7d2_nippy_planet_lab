const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);

  PubSub.subscribe('NavView:change', (event) => {
    const selectedPlanet = event.detail;
    this.publishPlanetInfo(selectedPlanet);
  });
}

SolarSystem.prototype.publishPlanetInfo = function (planetName) {
  // const selectedPlanet = () => {
  //   if (this.planets.name = planetName){
  //     return this.planets.currentValue;
  //   };
  // }
  const foundPlanet = this.planets.find(planet => {
    return planet.name === planetName
  })
  PubSub.publish('Planets:selected-planet-ready', foundPlanet);
  console.log(foundPlanet)
}

module.exports = SolarSystem;
