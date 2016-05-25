var app=angular.module('myApp',['ngAnimate']);
app.controller('myCtrl',function($scope){


$scope.showMe=false;
$scope.myFunc=function(){
	$scope.showMe={show:true};

}


$scope.count=0;

$scope.model='';
$scope.types='';
$scope.desc='';
$scope.pic='';
	$scope.cars=[
		{id:1,model:"Tesla model S",types:"electrical",desc:"This is a superfast car that use battery.", pic:"1"},
		{id:2,model:"Toyota Prius",types:"hybrid",desc:"This is a compact car toyota makes with gasoline and electrical solutions",pic:"2"},		
		{id:3,model:"Honda Accord",types:"Gasoline",desc:"This is a regular mid-size car Honda makes with gasoline only",pic:"3"}
	];


$scope.hideform=true;
$scope.edit=true;
$scope.incomplete=false;

$scope.editCar=function(id){
	$scope.hideform=false
	if(id=='new'){
		$scope.edit=true;
		$scope.incomplete=true;
		$scope.model='';
		$scope.types='';
		$scope.desc='';
		$scope.pic='';
	} else {
		$scope.edit=false;
		$scope.model=$scope.cars[id-1].model;
		$scope.types=$scope.cars[id-1].types;
		$scope.desc=$scope.cars[id-1].desc;
		$scope.pic=$scope.cars[id-1].pic;
	}
};



$scope.$watch('model',function() {$scope.test();});
$scope.$watch('types',function() {$scope.test();});
$scope.$watch('desc',function() {$scope.test();});
$scope.$watch('pic',function() {$scope.test();});
$scope.test = function() {
if ($scope.edit && (!$scope.model.length || !$scope.types.length || !$scope.desc.length || !$scope.pic.length))
  {
  	  $scope.incomplete = true;
  	 
  }
  else 
  {
  		$scope.incomplete=false;

  }

};

})




