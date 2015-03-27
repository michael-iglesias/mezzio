angular.module('app')
.controller('LoginCtrl', function ($rootScope, $scope, UserSvc) {
  $scope.login = function (username, password) {
    UserSvc.login(username, password)
    .then(function (user) {
      $rootScope.currentUser = user
    })
  }
})
