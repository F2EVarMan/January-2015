var expModule=angular.module('expanderModule',[])
expModule.directive('accordion',function(){
	return{
		restrict:'AE',
		replace: true,
		transclude:true,
		template:'<div ng-transclude></div>',
		controller:function(){
			var expanders=[];
			this.gotOpened=function(selectedExpander){
				angular.forEach(expanders,function(expander){
					if(selectedExpander !=expander){
						expander.showMe=false;
					}
				})
			}
			this.addExpander=function(expander){
				expanders.push(expander)
			}
		}
	}
})

expModule.directive('expander',function(){
	return{
		restrict:'AE',
		replace:true,
		transclude:true,
		require:'^?accordion',
		scope:{
			title:'=expanderTitle'
		},
		template:'<div>'
		+'<div class="btn btn-info" ng-click="toggle()">{{title}}</div>'
		+'<div class="btn btn-default" ng-show="showMe" ng-transclude></div>'
		+'</div>',
		link:function(scope,element,attr,accordionController){
			scope.showMe=false,
			accordionController.addExpander(scope);
			scope.toggle=function (){

				scope.showMe=!scope.showMe
					
					accordionController.gotOpened(scope);
				
				
			}

		}
	}
})
expModule.controller("SomeController",function($scope){
	$scope.expanders=[{
		title:"Click me to expand",
		text:"Hi there folks,Iam the content that was hidden but is now shown"
	},{
		title:"Click this",
		text:"Hi there folks,Iam the content that was hidden but is now shown"
	},{
		title:"Text",
		text:"text"
	}]

})