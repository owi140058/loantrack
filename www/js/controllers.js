angular.module('loantrack.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('homeController', function($scope, $ionicPlatform, $cordovaDeviceMotion) {

    $ionicPlatform.ready(function() {
        $cordovaDeviceMotion.getCurrentAcceleration(function(acceleration) {
            $scope.x = acceleration.x;
            $scope.y = acceleration.y;
            $scope.z = acceleration.z;
        }), function() {
            console.log("Failed to get acceleration");
        }
    });
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
