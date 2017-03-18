(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchmenu = "";
  $scope.sayMessage = "";

  $scope.displayMsg = function () {
      var message = checkMenu($scope.lunchmenu);
      $scope.sayMessage = message;
  };

  function checkMenu(menu) {
    if(menu.length==0){
      return "Please enter data first";
    }else{
      var menuArr=menu.split(",");
      var menuArrLen=menuArr.length;
      if(menuArrLen<=3){
        return "Enjoy!";
      }else{
        return "Too much!";
      }
    }
  };
}
})();
