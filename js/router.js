App.Router.map(function() {
	this.route('about');
	this.resource('license', function() {
		this.route('app');
		this.route('emberJs');
		this.route('buildingBlocks');
		this.route('emberI18n');
		this.route('jsSHA');
		this.route('emberData');
		this.route('emberLocalStorage');
	});
	this.resource('credentials', { path: '/' }, function() {
		this.route('new');
		this.route('edit', { path: '/edit/:credential_id' });
	});
});
App.AboutRoute = Ember.Route.extend({
	model: function() {
		return new Promise(function(resolve, reject) {
			var appRequest = window.navigator.mozApps.getSelf();

			appRequest.onsuccess = function() {
				if (appRequest.result) {
					resolve(appRequest.result.manifest);
				} else {
					reject(Error('Not an app'));
				}
			};

			appRequest.onerror = function() {
				reject(Error(appRequest.error.name));
			};
		});
	}
});
App.LicenseAppRoute = Ember.Route.extend({
	model: function() {
		return {
			year: 2015,
			owner: 'Tim van de Kamp'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/MIT', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseEmberJsRoute = Ember.Route.extend({
	model: function() {
		return {
			year: 2014,
			owner: 'Yehuda Katz, Tom Dale and Ember.js contributors'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/MIT', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseBuildingBlocksRoute = Ember.Route.extend({
	model: function() {
		return {
			year: 2012,
			owner: 'Mozilla Foundation'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/Apache-2', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseJsSHARoute = Ember.Route.extend({
	model: function() {
		return {
			year: '2008–2013',
			owner: 'Brian Turek'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/BSD3', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseEmberDataRoute = Ember.Route.extend({
	model: function() {
		return {
			year: '2011, 2011–2014',
			owner: 'LivingSocial Inc.; Tilde, Inc. and contributors'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/MIT', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseEmberLocalStorageRoute = Ember.Route.extend({
	model: function() {
		return {
			year: '2012',
			owner: 'Ryan Florence'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/MIT', {
			controller: 'license',
			model: model
		});
	}
});
App.LicenseEmberI18nRoute = Ember.Route.extend({
	model: function() {
		return {
			year: 2011,
			owner: 'James A. Rosen'
		};
	},

	renderTemplate: function(controller, model) {
		this.render('license/Apache-2', {
			controller: 'license',
			model: model
		});
	}
});
App.CredentialsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('credential');
	}
});
