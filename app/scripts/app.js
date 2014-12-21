var whichitApp = angular.module('whichitApp', ['ngRoute', 'instagramService', 'ui.bootstrap']);
whichitApp.config(
        function ($routeProvider, $httpProvider) {
            $routeProvider
                    .when('/feed', {
                        templateUrl: 'app/partials/feed.html',
                        controller: 'whichitCtrl'
                    })
                    .when('/outh', {
                        templateUrl: 'app/partials/feed.html',
                        controller: 'outhCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

            /* CORS... */
            /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        });

