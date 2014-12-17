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