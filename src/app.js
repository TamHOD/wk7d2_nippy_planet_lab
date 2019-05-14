const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const selectLink = document.querySelector('nav')
  const planetMenu = new NavView(selectLink);
  planetMenu.bindEvents();


  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents()
  console.log(planetsDataModel.planets);

  // const selectNavLink = document.querySelector('nav#')
  
});
