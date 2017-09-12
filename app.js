var app=angular.module("myModule",['ngStorage']);

app.controller("myCtrl",function($scope, $localStorage){

	$scope.Name=[];
	$scope.Email=[];
	$scope.Phone=[];

	//use this var to get selected index value in function    
    var ind;

    // use to execute the method when next time open this app to load old contact
	$scope.Checker = $localStorage.Checker ;

	$scope.addContact = function () {

	$localStorage.Checker="Yes";
	//add data in array
	$scope.Name.push($scope.Contact.Name);
	$scope.Email.push($scope.Contact.Email);
	$scope.Phone.push($scope.Contact.Phone);


	//Store data in localStorage
	$localStorage.Name = $scope.Name;
	$localStorage.Email = $scope.Email;
	$localStorage.Phone = $scope.Phone;
	
	//clear data from input
	$scope.Contact.Name="";
	$scope.Contact.Email="";
	$scope.Contact.Phone="";
	};

	$scope.editContact = function($index)
	{
		ind=$index;
		
		//set data in input field
		$scope.Contact.Name = $scope.Name[$index];
		$scope.Contact.Email = $scope.Email[$index];
		$scope.Contact.Phone = $scope.Phone[$index];

		//assign updatecontact to addcontact method 
		$scope.MethodChange = $scope.addContact;
		$scope.addContact = $scope.UpdateContact;
	};
	$scope.UpdateContact = function()
	{
		//change data on specific index
		$scope.Name[ind]=$scope.Contact.Name;
		$scope.Email[ind]=$scope.Contact.Email;
		$scope.Phone[ind]=$scope.Contact.Phone;

		//Store data in localStorage
		$localStorage.Name = $scope.Name;
		$localStorage.Email = $scope.Email;
		$localStorage.Phone = $scope.Phone;
		
		$scope.Contact.Name="";
		$scope.Contact.Email="";
		$scope.Contact.Phone="";

		//change method to old one
		$scope.addContact = $scope.MethodChange;
	}
	
	$scope.assignValueMethod = function()
	{
		$scope.Name=$localStorage.Name;
		$scope.Email=$localStorage.Email;
		$scope.Phone=$localStorage.Phone;
	}
});
