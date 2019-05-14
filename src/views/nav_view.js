const PubSub = require('../helpers/pub_sub.js');

const NavView = function (link) {
    this.link = link;
}

NavView.prototype.bindEvents = function(){
    PubSub.subscribe('Planets:all-planets-ready', (event) => {
        
    this.link.addEventListener('click',(event) => {
        console.log(event.target);
        
        const selectedLink = event.target.id;
        PubSub.publish('NavView:change', selectedLink);
    })
})
}

    


module.exports = NavView;