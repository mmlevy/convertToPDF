namespace app.converter {
    'use strict';

    angular.module('app.converter')
        .config(configStates);

    configStates.$inject = ['$stateProvider'];

    // TODO - Don't use 'any' type
    function configStates($stateProvider: any) {
        $stateProvider.state('converter', {
            url: '/converter',
            // Not sure why 'component' doesn't work here... So using 'template' for now
            // Note: 'component' should be available since we're using ui-router 1.x
            template: '<converter></converter>'
        });
    }
}