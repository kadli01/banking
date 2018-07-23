app.factory('usersService', function(){

	usersList = [
		{
			id: 1,
			name: 'Levi',
			email: 'szekely.levi@gmail.com',
			balance: 100,
		},
		{
			id: 2,
			name: 'André',
			email: 'andre.timar@gmail.com',
			balance: 100,
		},
		{
			id: 3,
			name: 'Gabesz',
			email: 'gabor.magyar@gmail.com',
			balance: 150,
		},
		{
			id: 4,
			name: 'Petya',
			email: 'peter.varga@gmail.com',
			balance: 90,
		},
		{
			id: 5,
			name: 'Krisz',
			email: 'krisztian.kadlicsko@gmail.com',
			balance: 200,
		}
	];

	var get = function() {
		return usersList;
	}

	var update = function(updatedUsers) {
		usersList = updatedUsers;
	}
	// TODO: Logged in user's history
	var users = {
		loggedIn: {
			user: usersList[4],
			history: [
				{
					type: 'deposit',
					amount: 200,
					from: '',
					to: ''
				},
				{
					type: 'transfer',
					amount: -20,
					from: '',
					to: 'gabor.magyar@gmail.com'
				},
				{
					type: 'transfer',
					amount: 20,
					from: 'szekely.levi@gmail.com',
					to: ''
				},
			]
		},
		get: get,
		update: update
	};

	return users;
});