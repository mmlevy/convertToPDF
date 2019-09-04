namespace main {
    'use strict';

    angular.module('app', [])
        .controller('MainController', function MainController($scope) {
            // TODO - DO NOT USE $SCOPE!!! NO NO NO!
            $scope.message = 'Yeah it works';
        });
}