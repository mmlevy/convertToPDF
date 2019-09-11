namespace app {
    'use strict';

    export class AppCtrl {
        static readonly $inject: string[] = ['$transitions'];

        constructor(private $transitions: any) {
            this.$transitions.onError({}, (transition) => {
                // TODO
            })
        }

        $onInit: () => {};
    }

    angular.module('app')
        .controller('AppCtrl', AppCtrl);
}