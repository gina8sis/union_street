angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Menu', function($http) {
  var menu
  // Might use a resource here that returns a JSON array

    $http.get('http://localhost:3000/api/v1/menu_items.json').
  success(function(data, status, headers, config) {
    menu = data
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  // Some fake testing data
  // var menu = [
  //   { id: 0, name: 'V60' },
  //   { id: 1, name: 'Long Black' },
  //   { id: 2, name: 'Flat White' },
  //   { id: 3, name: 'Latte' }
  // ];

  return {
    all: function() {
      return menu;
    },
    get: function(menuId) {
      // Simple index lookup
      return menu[menuId];
    }
  }
})

  .service('CartService', function(){

    // window.CartService = this;

    var _self = this;

    this.total = 0;

    this.cartItems = []

    this.addItem = function (item, quantity) {
      var lineItem = JSON.parse( JSON.stringify( item ) );
      lineItem.quantity = quantity;
      console.log('line item ', lineItem);
      console.log(quantity);
      lineItem.menu_item_id = item.id;
      _self.cartItems.push(lineItem);
    };

    this.addOne = function (item) {

      //check if this item id is in the cart_items
      // then adds one to the qty field
    };


    this.checkout = function() {

    //send to rails
    }

    this.deleteItem = function (index) {
      _self.cartItems.splice(index,1)
    };

    return this;
  });









// .factory('Menu', function($http, $scope) {
//   // var menu = [];
//   // Might use a resource here that returns a JSON array

//     $http.get('http://localhost:3000/api/v1/menu_items.json').
//   success(function(data, status, headers, config) {
//     $scope.menu = data
//   }).
//   error(function(data, status, headers, config) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });

//   // Some fake testing data
//   // var menu = [
//   //   { id: 0, name: 'V60' },
//   //   { id: 1, name: 'Long Black' },
//   //   { id: 2, name: 'Flat White' },
//   //   { id: 3, name: 'Latte' }
//   // ];

//   return {
//     all: function() {
//       return menu;
//     },
//     get: function(menuId) {
//       // Simple index lookup

//       return menu[menuId];
//     }
//   }
// });