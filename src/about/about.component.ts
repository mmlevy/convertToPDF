namespace app.converter {
    'use strict';

    export class AboutComponent {
        public text;

        static readonly $inject: string[] = [];

        constructor() {}

        $onInit(): void {
            this.text = "TODO: About page";
        }
    }

    angular
        .module('app.about')
        .component('about', {
            controller: AboutComponent,
            templateUrl: 'about/about.component.tpl.html'
        });
}