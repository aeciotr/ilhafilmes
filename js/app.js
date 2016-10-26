angular.module("ilhaFilmes", ["firebase"]);
angular.module("ilhaFilmes").controller("moviesController",function($scope,$http,$firebaseArray){

    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);
     

    $scope.addMovie = function (movie) {

      $http.get("http://www.omdbapi.com/?t="+movie.nome+"&y=&plot=full&r=json").success(function (data) {
   
         if(data.Response!="False") {

           list.$add(data).then(function(ref) {

              $scope.movie.nome = '';
           });
         } else {

          alert("Nenhum filme encontrado!");

         }

        });
     };


    $scope.removeMovie = function (key) {

      list.$remove(key).then(function(ref){});
    }

    $scope.movies = list;
});