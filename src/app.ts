namespace app {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.converter',
        'app.about'
    ])
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        // This gets rid of the hashbang in the url
        // $locationProvider.html5Mode(true); // TODO: Get this to work right with my routes

        $urlRouterProvider.otherwise('/converter');

        $stateProvider
            .state('converter', {
                url: '/converter',
                component: 'converter'
            })
            .state('about', {
                url: '/about',
                component: 'about'
            });
    });
}