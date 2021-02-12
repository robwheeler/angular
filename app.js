(function () {
  'use strict';

  angular.module('NameCalculator', [])
  .controller('NameCalculatorController', function($scope) {
    $scope.name = "";
    $scope.value = 0;
    $scope.displayNumeric = function() {
      $scope.value = calculateValueForString($scope.name);
    };
  });

  function calculateValueForString(string) {
    var total = 0;
    for (var i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
    }
    return total;
  }

})();
