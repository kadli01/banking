app.controller('depositController', function(usersService, $route){
	console.log($route.current.$$route.originalPath);
	this.users = usersService.get();
	this.loggedInUser = usersService.loggedIn;

	this.type = 1;
	this.amount = null;

	this.deposit = function() {
		this.loggedInUser.user.balance += this.amount;

		this.loggedInUser.history.push({
			type: 'deposit',
			amount: this.amount,
			from : this.loggedInUser.user.email,
			to: this.loggedInUser.user.email
		});
		console.log(this.loggedInUser);
		this.amount = null;
	}

	// TODO: Check Balance before withdraw
	this.withdraw = function() {
		this.loggedInUser.user.balance -= this.amount;

		this.loggedInUser.history.push({
			type: 'withdraw',
			amount: this.amount * -1,
			from : this.loggedInUser.user.email,
			to: this.loggedInUser.user.email
		});
		console.log(this.loggedInUser);
		this.amount = null;
	}


});