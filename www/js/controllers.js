angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope, $http, Menu) {
  $scope.menus = Menu.all();
})

.controller('MenuDetailCtrl', function($scope, $http, $stateParams) {
console.log($stateParams)
  $http.get('http://localhost:3000/api/v1/menu_items/' + $stateParams.menuId + '.json')
    .success(function(data, status, headers, config) {
  $scope.menu = data;
    });
})
//   $http.get('http://localhost:3000/api/v1/menu_items/12.json').
//   success(function(data, status, headers, config) {
//     $scope.menu = data
//       }).
//   error(function(data, status, headers, config) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });



//   // $scope.menu = Menu.get($stateParams.menuId);
// })

.controller('AccountCtrl', function($scope) {
});

.controller('OrderCtrl', function($scope) {

});
