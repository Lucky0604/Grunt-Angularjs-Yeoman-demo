'use strict';

/**
 * @ngdoc overview
 * @name demo4App
 * @description
 * # demo4App
 *
 * Main module of the application.
 */
angular
  .module('demo4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
    .config(['localStorageServiceProvider',function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('1s');
    }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
