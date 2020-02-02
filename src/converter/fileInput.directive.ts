namespace app.converter {
    'use strict';

    angular
        .module('app.converter')
        .directive('fileInput', ['$parse', ($parse: ng.IParseService): ng.IDirective => {
            return {
                restrict: 'A',
                link: (scope: ng.IScope, element: any, attrs) => {
                    element.bind('change', () => {
                        $parse(attrs.fileInput).assign(scope, element[0].files[0]);
                        scope.$apply();
                    });
                }
            };
        }]);
}