app.directive('checkEmail', function(usersService) {
	var loggedInEmail = usersService.loggedIn.user.email;
	var emails = _.pluck(usersService.get(), 'email');
	
	// console.log(emails);	
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.checkEmail = function(modelValue, viewValue) {
				if (ctrl.$isEmpty(modelValue)) {
					console.log('false');
					return true;
				}
				if (loggedInEmail == modelValue) {
					console.log('false');
					return false;
				}

				if (emails.includes(modelValue)) {
					return true;
				}
				console.log('false');
				return false;
			}
		}
	}
});