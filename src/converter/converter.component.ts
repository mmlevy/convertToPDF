namespace app.converter {
    'use strict';

    export class ConverterComponent {
        public text;

        static readonly $inject: string[] = ['$http', 'toastr', '$window'];

        selectedFile: any;
        loading: boolean;

        constructor(
            private readonly $http: any,
            private readonly toastr: any,
            private readonly $window: any) {}

        $onInit(): void {
            this.loading = false;
        }

        convert() {
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            this.loading = true;

            this.$http.post('/api/convert', formData, { headers: { transformRequest: angular.identity, 'Content-Type': undefined } })
                .then((response) => {
                    this.toastr.success('File conversion complete', 'Success');
                })
                .catch((error) => {
                    this.toastr.error('File conversion failed', 'Error');
                })
                .finally(() => {
                    this.loading = false;
                    this.download();
                });
        }

        download() {
            // TODO: Don't use hardcoded url
            // $window.open($location.protocol() + '://' + $location.host()
            this.$window.open('http://localhost:3000/api/download?filename=' + this.selectedFile.name, '_blank');
        }
    }

    angular
        .module('app.converter')
        .component('converter', {
            controller: ConverterComponent,
            templateUrl: 'converter/converter.component.tpl.html'
        });
}