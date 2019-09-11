namespace app.converter {
    'use strict';

    angular.module('app.converter')
        .config(configStates);

    configStates.$inject = ['$stateProvider'];

    // TODO - Don't use 'any' type
    function configStates($stateProvider: any) {
        $stateProvider.state('converter', {
            url: '/converter',
            views: {
                main: {
                    template: '<converter></converter>'
                }
            }
        });
    }
}