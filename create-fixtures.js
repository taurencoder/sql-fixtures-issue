var dbConfig = require('./knexfile').database;
var sqlFixtures = require('sql-fixtures');

var dataSpec = {
  products: [{
    "price": 100
  }, {
    "price": 200
  }],
  product_settings: [{
    "quantity": 10,
    "product_id": "products:0"
  }, {
    "quantity": 20,
    "product_id": "products:1"
  }]
};

sqlFixtures.create(dbConfig, dataSpec, function(err, result) {
  console.log(result);
}).then(function() {
  sqlFixtures.destroy();
});
