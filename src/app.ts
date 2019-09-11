namespace app {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.converter'
    ])
        .config(function($stateProvider, $urlRouterProvider) {
            // Default landing page
            $urlRouterProvider.otherwise('/converter');

            // TODO: About page
            // $stateProvider.state('about', {
            //     url: '/about',
            //     template: '<about></about>'
            // });
        });
}