angular.module('app')
.service('UserSvc', function ($http, $rootScope) {
  var svc = this
  /*
  svc.getUser = function () {
    return $http.get('/api/sessions/validate_user')
    .then(function(data) {
      $http.defaults.headers.common['X-Auth'] = data.data
      return $http.get('/api/users')
      .then(function (response) {
        console.log(response.data);
        $rootScope.$emit('login', response.data)
        return response.data
      })
    })
  } */
  svc.getUser = function () {
    return $http.get('/api/sessions/validate_user')
      .then(function(data) {
        $http.defaults.headers.common['X-Auth'] = data.data;
        return $http.get('/api/users');
      })
      .then(function (response) {
        console.log(response.data);
        //$rootScope.$emit('login', response.data)
        return response.data
      })
  }

  svc.login = function (username, password) {
    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (response) {
      svc.token = response.data
      $http.defaults.headers.common['X-Auth'] = response.data
      return svc.getUser()
    })
  }
  svc.register = function (username, password) {
    return $http.post('/api/users', {
      username: username, password: password
    }).then(function () {
      return svc.login(username, password)
    })
  }

})
