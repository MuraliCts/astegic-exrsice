'use strict';

/**
 * @ngdoc function
 * @name astegicExrsiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astegicExrsiceApp
 */
angular.module('astegicExrsiceApp')
    .controller('MainCtrl', function ($scope, $http, $location) {
        $scope.getCompanies = function (val) {
            return $http.get('https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete', {
                params: {
                    company_name: val
                }
            }).then(function (response) {
                return response.data.searchResults.map(function (item) {
                    return item;
                });
            });
        };
        $scope.goToAboutPage = function (comp) {
            var cid = comp.companyIds.join();
            var name = comp.companyName;
            $location.path('/about').search({cid: cid, name: name});
        }
        $scope.onSelect = function (item) {
            $scope.selectedItem = item;
        }
    });
