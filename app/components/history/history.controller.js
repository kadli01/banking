app.controller('historyController', function(usersService){
	// TODO: date
	this.loggedInUser = usersService.loggedIn;
});