var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.name = 'Matt';

	$scope.friends = [
		{name: 'Jess'},
		{name: 'Abby'},
		{name: 'Jacob'},
		{name: 'Taylor'}
	]

	$scope.newName = {name: 'Enter a new Friend'};
	$scope.addFriend = function(newName){
		$scope.friends.push(newName);
	}
})

