var app = angular.module('movieApp', []);

app.controller('movieCtrl', function($scope, movieService) {
  $scope.movieList = movieService.movieList;
  $scope.yearList = movieService.yearList;
  $scope.movieName = '';
  $scope.transfer = [];
  $scope.money = 30;
  $scope.balance = 'Select movies from below to add to your collection'
  $scope.val = false;

  $scope.selectMe = function(movie){
    if($scope.money >= 10){
    $scope.transfer.push(movie);
    $scope.money -= 10; 
  } else {
      $scope.balance = "Sorry you dont have enough money for another";
     console.log($scope.money);
    }
  }
  $scope.makeFalse = function(){
    $scope.val = !$scope.val
  }

  $scope.removeMovie = function($index){
    $scope.transfer.splice($index, 1)
    // ta.img = '';
    // ta.name = 'Removed';
    // ta.desc = '';
    // ta.year = '';
    // $scope.money += 10;
    // console.log($scope.removeT)
    // $scope.removeT = false;
    // console.log($scope.removeT)

  }    
});