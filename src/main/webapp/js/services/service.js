app.factory('userService', [ '$http', function($http) {
		return {
			newUser : function(userData) {
				var url = '/AngularJSService/user/addNew';
				var data = {
					name : userData.name,
					email : userData.email,
					website : userData.website
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},
			checkUser : function(loginData) {
					var url = '/AngularJSService/login/checkUser';
					var data = {
						email : loginData.email,
						password : loginData.password,
					};
					return $http({
						url : url,
						data : $.param(data),
						method : 'POST',
						headers : {
							"Content-Type" : "application/x-www-form-urlencoded"
						}
					});
		     },
			editUser : function(userData) {
				var url = '/AngularJSService/user/editUser';
				var data = {
					id : userData.id,
					name : userData.name,
					email : userData.email,
					website : userData.website
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},

			getUsers : function(userData) {
				var url = '/AngularJSService/user/getUsers';
				var data = {
					userId : userData
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},
			
			deleteUser : function(userData) {
				var url = '/AngularJSService/user/deleteUser';
				var data = {
					userId : userData
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			}
		};
	} ]);
console.log("HomepageService Controller loaded..");
;