app.controller('transferController', function(usersService){
	this.users = usersService.get();
	this.loggedInUser = usersService.loggedIn;

	this.to = '';
	this.amount = null;
		console.log(this.loggedInUser);

	// done: custom validation directive to prevent trasferring to self
	// done: validation to check balance

	this.transfer = function() {
		var to = _.findWhere(this.users, {email: this.to});
		if (to) {
			to.balance += this.amount;
			this.loggedInUser.user.balance -= this.amount;

			this.loggedInUser.history.push({
				type: 'transfer',
				amount: this.amount * -1,
				from : this.loggedInUser.user.email,
				to: this.to
			});
		}
		this.to = '';
		this.amount = null;
		console.log(to);
		console.log(this.loggedInUser);
	}
});