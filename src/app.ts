const app = angular.module('app', []);

app.controller('MainController', function MainController($scope) {
    // TODO - DO NOT USE $SCOPE!!! NO NO NO!
    $scope.message = 'Yeah it works';
});