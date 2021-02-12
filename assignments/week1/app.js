
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.menu = "";
    $scope.lunchCheck = function() {
      var items = $scope.menu.split(',');
      // Remove whitespace per item
      items = items.map(s => s.trim())
      // Remote empty items
      items = items.filter(e => e.trim());
      if (items.length == 0) {
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }

})();
