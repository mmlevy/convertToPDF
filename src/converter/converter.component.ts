namespace converter {
    'use strict';

    export class ConverterComponent {
        static readonly $inject: string[] = [];

        constructor() {}

        $onInit(): void {}
    }

    angular
        .module('converter')
        .component('converter', {
            controller: ConverterComponent,
            templateUrl: 'converter/converter.component.tpl.html'
        });
}