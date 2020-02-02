namespace app.converter {
    'use strict';

    export class ConverterComponent {
        public text;

        static readonly $inject: string[] = ['$http', 'toastr'];

        selectedFile: any;

        constructor(
            private readonly $http: any,
            private readonly toastr: any) {}

        $onInit(): void {
            // Nothing to initialize
        }

        upload() {
            const formData = new FormData();
            formData.append('file', this.selectedFile);

            this.$http.post('/api/upload', formData, { headers: { transformRequest: angular.identity, 'Content-Type': undefined } })
                .then((response) => {
                    this.toastr.success('The file was uploaded', 'Success');
                })
                .catch((error) => {
                    this.toastr.success('The file was not uploaded', 'Error');
                });
        }
    }

    angular
        .module('app.converter')
        .component('converter', {
            controller: ConverterComponent,
            templateUrl: 'converter/converter.component.tpl.html'
        });
}