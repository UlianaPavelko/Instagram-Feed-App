whichitApp.controller('whichitCtrl', function ($scope, instagramService, $modal)
{
    $scope.feed = [];
    $scope.search = "santa";

    $scope.searchTag = function (searchParam) {
        console.log('search by tag ' + searchParam);
        $scope.search = searchParam;
        $callback = function (data) {
            console.log('received results :)');
            $scope.feed = data;
        };
        instagramService.getFeed($callback, $scope.search);
    };

    $scope.searchByUser = function (searchParam) {
        console.log('search by User Id ' + searchParam);
        $scope.search = searchParam;
        $callback = function (data) {
            console.log('received results :)');
            $scope.feed = data;
        };
        instagramService.getUserFeed($callback, $scope.search);
    };
    $scope.searchTag($scope.search);

    $scope.open = function (item) {
        console.log('open modal');
        $scope.item = item;
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                item: function () {
                    return $scope.item;
                }
            }
        });
        modalInstance.result
                .then(function (result) {
                    console.log('get user id or tag ' + result + ' from modal');
                    if (angular.isNumber(result)) {
                        $scope.searchByUser(result);
                    } else {
                        $scope.searchTag(result);
                    }
                });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

whichitApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, item, instagramService) {

    $scope.item = item;
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.searchTagModal = function (result) {
        console.log('pass user id' + result + ' to feed scope');
        $modalInstance.close(result);
    };

    $scope.searchUserModal = function (result) {
        console.log('pass user id or tag ' + result + ' to feed scope');
        $modalInstance.close(parseInt(result));
    };
});