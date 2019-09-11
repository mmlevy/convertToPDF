namespace app {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.converter'
    ])
    // TODO: Get the state to work
        .config(function($stateProvider, $urlRouterProvider) {
            //$urlRouterProvider.otherwise('/converter');

            // $stateProvider.state('converter', {
            //     url: '/converter',
            //     //templateUrl: 'converter/converter.component.tpl.html',
            //     component: 'ConverterComponent'
            // });

            // $stateProvider.state('converter', {
            //     url: '/converter',
            //     views: {
            //         main: {
            //             template: '<converter></converter>'
            //         }
            //     }
            // });
        });
}