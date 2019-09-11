namespace app.converter {
    'use strict';

    export class ConverterComponent {
        public text;

        static readonly $inject: string[] = [];

        constructor() {}

        $onInit(): void {
            this.text = "this is some text";
        }
    }

    angular
        .module('app.converter')
        .component('converter', {
            controller: ConverterComponent,
            templateUrl: 'converter/converter.component.tpl.html'
        });
}