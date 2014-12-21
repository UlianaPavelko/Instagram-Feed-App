angular.module('instagramService', [])
        .factory('instagramService', function ($http) {
            return {
                getFeed: function (callback, search) {
                    console.log("Call getFeed");
                    var endPoint = "https://api.instagram.com/v1/tags/" + search + "/media/recent?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
                    $http.jsonp(endPoint)
                            .success(function (response) {
                                callback(response.data);
                            })
//                            .error(function (response) {
//                                console.log('no data');
//                                callback(response);
//                            })
                },
                getUserFeed: function (callback, search) {
                    console.log("Call getUserFeed");
                    var endPoint = "https://api.instagram.com/v1/users/" + search + "/media/recent?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
                    $http.jsonp(endPoint)
                            .success(function (response) {
                                callback(response.data);
                            })
//                            .error(function (response) {
//                                console.log('no data');
//                                callback(response);
//                            })
                }
            };
        });