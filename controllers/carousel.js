var carousel_ = function (app){


   app.controller('carouselCtrl',function($scope, $http, dataFact){

   	$scope.categorys = [];
   	$scope.products = [];

      $scope.getCategorys = function(){

      		 dataFact.categorys(function(rs){

      		 	 console.log(rs);

                  $scope.categorys = rs;


              }); 

      }

      $scope.getProducts = function(category){

      	  dataFact.products(function(rs){

      	  	  $scope.products = rs;

      	  }, category || null);

      }

   });



   app.factory('dataFact', function($http){


       this.categorys = function(callback, error){

           $http.get("categorys.json")
           .success(callback)
           .error(error || function(err){console.log(error);});

       }

       this.products = function(callback, category, error){


       	   $http.get("categorys.json")
           .success(callback)
           .error(error || function(err){console.log(error);});


       }


       return this;

   });

   return app;
	
};