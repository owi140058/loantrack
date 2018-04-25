angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('homeController', function($scope) {
})

.controller('addLoanController', function($scope) {
    
    $scope.contacts = [
        {"displayName": "Andrew"},
        {"displayName": "Peter"},
        {"displayName": "Mary"}
    ];
    
    $scope.select = function(contact) {
        //do nothing
    }
});
