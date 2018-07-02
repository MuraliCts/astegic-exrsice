'use strict';

/**
 * @ngdoc function
 * @name astegicExrsiceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the astegicExrsiceApp
 */
angular.module('astegicExrsiceApp')
  .controller('AboutCtrl', function ($scope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.params=$location.search();
    $scope.goToMain = function (comp) {
      
      $location.path('/');
  }
  });
