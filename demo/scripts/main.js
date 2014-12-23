(function () {
    'use strict';

    var app = angular.module('throbber-demo', ['interceptors', 'ngResource']);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('throbberInterceptor');
    }]);

    app.controller('demo-controller', [
        '$http', '$resource',
        function ($http, $resource) {
            var controller = this;
            var onHttpSuccess = function (data, status, headers, config) {
                controller.status = 'success';
                controller.data = {
                    data: data,
                    status: status,
                    headers: headers,
                    config: config
                };
            };
            var onHttpError = function (data, status, headers, config) {
                controller.status = 'error';
                controller.data = {
                    data: data,
                    status: status,
                    headers: headers,
                    config: config
                };
            };
            var onResourceSuccess = function (value, headers) {
                controller.status = 'success';
                controller.data = {
                    data: value,
                    headers: headers
                };
            };
            var onResourceError = function (headers) {
                controller.status = 'error';
                controller.data = {
                    headers: headers
                };
            };

            this.http = function () {
                $http.get('items.json').success(onHttpSuccess).error(onHttpError);
            };
            this.httpWithConfig = function () {
                $http.get('items.json', {
                    '$throbber': {
                        parent: '.spacer01',
                        throbber: (new Spinner()).spin().el
                    }
                }).success(onHttpSuccess).error(onHttpError);
            };
            this.resource = function () {
                $resource('items.json').get(null, onResourceSuccess, onResourceError);
            };
        }
    ]);
})();
