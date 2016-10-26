angular.module("ilhaFilmes", ["firebase"]);
angular.module("ilhaFilmes").controller("ilhaFilmesController",function($scope,$http,$firebaseArray){

    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);
     

    $scope.addFilme = function (filme){
      
      $http.get("http://www.omdbapi.com/?t="+filme.nome+"&y=&plot=full&r=json").success(function (data) {
   
         if(data.Response!="False"){

           list.$add(data).then(function(ref){

              $scope.filme.nome = '';
           });
         } else {
          alert("Nenhum filme encontrado!");
         }

        });
    };

    $scope.removeFilme = function(key){

      list.$remove(key).then(function(ref){});
    }

    $scope.filmes = list;

});