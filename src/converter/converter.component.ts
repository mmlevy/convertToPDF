namespace app.converter {
    'use strict';

    export class ConverterComponent {

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
                .then(() => {
                    this.toastr.success('File conversion complete', 'Success');
                })
                .catch(() => {
                    this.toastr.error('File conversion failed', 'Error');
                })
                .finally(() => {
                    this.loading = false;
                    this.download();
                });
        }

        download() {
            // TODO: input validation
            const fileName = this.selectedFile.name.replace(/\.[^/.]+$/, '') + '.pdf';
            // TODO: Maybe use $location service, not sure how reliable $window.origin is
            // $location.protocol() + '://' + $location.host()
            this.$window.open(this.$window.origin + '/api/download?filename=' + fileName, '_blank');
        }
    }

    angular
        .module('app.converter')
        .component('converter', {
            controller: ConverterComponent,
            templateUrl: 'converter/converter.component.tpl.html'
        });
}