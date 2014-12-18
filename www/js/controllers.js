angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope, $http, Menu) {
  $scope.menus = Menu.all();
})

.controller('MenuDetailCtrl', function($scope, $http, $stateParams, CartService) {


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

.controller('OrderCtrl', function($scope, $http, $stateParams, CartService) {

    window.CartService = CartService;

    $scope.addItem = function(item, quantity) {

      CartService.addItem(item, quantity)

    }
    $scope.total = CartService.total
    // ng-click="addThisItem(item)"
    $scope.addThisItem = function(item){
      CartService.addOne(item)

    }


    $scope.newOrder = function(item){
      console.log($scope.data.optionalInstructions)
    }
  })

.controller('ConfirmCtrl', function($scope, $http, $stateParams, CartService){
  console.log(CartService.cartItems)

   $scope.deleteItem = function(index) {

      CartService.deleteItem(index)

    }


  $scope.showItems = CartService.cartItems
        var req = {
                 method: 'POST',
                 url: 'http://localhost:3000/api/v1/orders',
                 headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 params: {items: CartService.cartItems},
                };

      $http(req).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

})



.controller('AccountCtrl', function($scope) {
})
