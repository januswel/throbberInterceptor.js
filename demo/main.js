(function () {
    'use strict';

    var app = angular.module('throbber-demo', ['interceptors']);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('throbberInterceptor');
    }]);

    app.controller('demo-controller', [
        '$http',
        function ($http) {
            var controller = this;
            angular.element(document).ready(function () {
                $http.get('items.json', {
                    '$throbber': {
                        parent: '.spacer01',
                        throbber: (new Spinner()).spin().el
                    }
                }).success(function (data, status, headers, config) {
                    controller.status = 'success';
                    controller.data = {
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    };
                }).error(function (data, status, headers, config) {
                    controller.status = 'error';
                    controller.data = {
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    };
                });
            });
        }
    ]);
})();
