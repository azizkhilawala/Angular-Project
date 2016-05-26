'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhoneListCtrl',['$scope','$http',
  function ($scope,$http) {
    $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
  });
$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','$http',function ($scope,$routeParams,$http) {
  $scope.phoneId = $routeParams.phoneId;
  $http.get('phones/'+$scope.phoneId+'.json').success(function (data) {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
  });
    $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
};
  $scope.getBack = function () {
    console.log('$routeParams',$routeParams);
  };
}]);

phonecatControllers.directive('phoneFeatures',function () {
  return{
    restrict:'E',
    templateUrl:'partials/phone-features.html'
  };
});

phonecatControllers.controller('TabController',['$scope',function ($scope) {
  $scope.tab = 1;
  $scope.setTab = function (selectTab) {
    $scope.tab = selectTab;
  };
  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  };
}]);

phonecatControllers.controller('ReviewController',['$scope',function ($scope) {
  $scope.reviews =[{
      "stars":5,
      "body":"This an amazing product",
      "author":"superphonelover@phony.com"
  },
  {
    "stars":4,
    "body":"This a very good product",
    "author":"phonelover@phony.com"
  }];

  $scope.addReview = function() {
    $scope.reviews.push({stars:$scope.reviews.star,body:$scope.reviews.body,author:$scope.reviews.author});
    $scope.reviews.star="";
    $scope.reviews.body="";
    $scope.reviews.author="";
    // $scope.reviews = {};
  };
}]);
