angular.module('app')
.controller('ApplicationCtrl', function ($rootScope, UserSvc) {
  UserSvc.getUser().then(function(user) {
    $rootScope.currentUser = user
  })
})
