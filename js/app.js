var myModule=angular.module('myModule',[]);
myModule.directive("superman",function(){
	return{
		//create a separate scope
		//prevent influence other directive
		scope:{},
		// Give directive to define a set of public methods
		// convenient external calls
		restrict:'AE',
		controller:function($scope){
			$scope.abilities=[];
			this.addStrength=function(){
				$scope.abilities.push("strength");
			};
			this.addSpeed=function(){
				$scope.abilities.push("speed")
			};
			this.addLight=function(){
				$scope.abilities.push("light")
				
			}

		},		
		link:function(scope,element,attr){
			element.addClass('btn btn-primary');
			element.bind("mouseenter",function(){
				//In the console output superman has ability
				console.log(scope.abilities);
			})
		}
	}

})
myModule.directive("strength",function(){
	return{
		//depends on the superman directive 
		require:'^superman',
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addStrength();
		}

	}
})
myModule.directive("speed",function(){
	return{
		require:'^superman',
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addSpeed();

		}

	}
})
myModule.directive("light",function(){
	return{
		require:'^superman',
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addLight();

		}

	}
})