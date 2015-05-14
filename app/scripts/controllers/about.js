'use strict';

/**
 * @ngdoc function
 * @name demo4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demo4App
 */
angular.module('demo4App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
