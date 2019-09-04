namespace converter {
    'use strict';

    angular.module('app', ['ui.router'])
        .controller('MainController', function MainController($scope) {
            // TODO - DO NOT USE $SCOPE!!! NO NO NO!
            $scope.message = 'Yeah it works';
        });
}