/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var MenuItem = require('../api/menuItem/menuItem.model.js');
var Menu = require('../api/menu/menu.model.js');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

MenuItem.find({}).remove(function() {
  MenuItem.create({
    itemId: "abcd1234",
    menuId: "Menu1",
    name: "Item1",
    description: "Sed varius mattis velit nec pulvinar. Pellentesque ornare lorem vel blandit volutpat. Quisque venenatis hendrerit odio nec laoreet. Ut nisl leo, laoreet vitae efficitur et, lacinia vel dui. Maecenas et lobortis erat. Vestibulum risus enim, laoreet eget urna id, condimentum venenatis nisi. Phasellus vulputate nibh ultrices libero pulvinar finibus. Etiam non elit et diam vulputate tristique. Quisque vehicula et tortor semper elementum. Fusce quis elementum eros.",
    active: true,
    primaryImage: "http://i.imgur.com/qKHMMc0.jpg",
    imagery:["http://i.imgur.com/qKHMMc0.jpg"],
    price: 19.99,
    ingredients: ["rosemary","tyne","someother shit"],
    category: "Mexican"
  },
  {
    itemId: "abcd1235",
    menuId: "Menu1",
    name: "Item2",
    description: "Cras suscipit, risus tempor iaculis sollicitudin, nunc augue posuere leo, eget semper ipsum nulla et felis. Pellentesque ultrices sapien at nisl porta malesuada. Integer nunc dui, eleifend a feugiat at, rhoncus elementum lacus. Quisque rhoncus scelerisque elementum. Morbi pretium felis a orci dictum sodales. Pellentesque non cursus ante, quis volutpat metus. Suspendisse dapibus libero feugiat fermentum lobortis. Donec non ligula iaculis, feugiat justo ut, pulvinar arcu. Nullam a quam vitae tellus facilisis cursus id non est. Fusce sed massa lacus. Proin non mollis elit. Sed ac porttitor erat, at venenatis libero. Etiam lacinia odio vitae feugiat finibus. Aliquam quis mauris molestie, condimentum elit a, porta odio. Mauris sagittis malesuada lectus at volutpat. Vivamus rutrum eu purus a malesuada. Curabitur finibus enim sapien, nec lobortis elit consequat eget. Sed placerat ligula in dui pulvinar feugiat. Aenean ultrices lacus ac commodo tempus. Suspendisse quis nisl maximus, vulputate nulla vel, ornare nisl. Morbi eget augue vel mi faucibus porta nec luctus augue. Ut interdum vitae justo eget eleifend. Suspendisse auctor leo at sapien finibus venenatis. Maecenas id placerat urna. Donec dignissim sodales felis. Sed elementum erat vitae libero bibendum congue. Pellentesque pretium tincidunt odio, ac ullamcorper magna congue vitae.",
    active: true,
    primaryImage: "http://i.imgur.com/qKHMMc0.jpg",
    imagery:["http://i.imgur.com/qKHMMc0.jpg"],
    price: 19.98,
    ingredients: ["rosemary","tyne","someother shit"],
    category: "Mexican"
  }
  );
});

Menu.find({}).remove(function(){
  Menu.create({
    name:"Menu1",
    active:true,
    menuItems:["abcd1234"]
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'consumer',
    name: 'Test User',
    email: 'consumer@consumer.com',
    password: 'consumer'
  }, 
  {
    provider: 'local',
    role: 'supplier',
    name: 'Supplier',
    email: 'supplier@supplier.com',
    password: 'supplier'
  },
  {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },
  {
    provider: 'local',
    role: 'superadmin',
    name: 'SuperAdmin',
    email: 'superadmin@superadmin.com',
    password: 'superadmin'
  }, 
  function() {
      console.log('finished populating users');
    }
  );
});