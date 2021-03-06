App.CredentialsIndexController = Ember.ArrayController.extend({
	itemController: 'credentialIndex',

	init: function() {
		this.tick();
		this._super();
	},

	tick: function() {
		var unixTimeMiliseconds = new Date().getTime();
		var unixTime = ~~(unixTimeMiliseconds / 1000);

		this.set('unixTimeMiliseconds', unixTimeMiliseconds);

		// Only update the property if it has changed in order to save
		// unnecessary recomputations.
		if (unixTime != this.get('unixTime')) {
			this.set('unixTime', unixTime);
		}

		Ember.run.later(this, this.tick, 75);
	},

	progress: function() {
		if (this.get('oneTimer')) {
			return this.objectAt(0).get('progress');
		} else {
			return false;
		}
	}.property('@each.progress'),

	oneTimer: function() {
		var items = this.get('length');

		if (items < 1) {
			return false;
		} else {
			var thisTimeStep = this.objectAt(0).get('timeStep');

			return this.every(function(item) {
				return thisTimeStep == item.get('timeStep');
			});
		}
	}.property('@each.timeStep'),

	actions: {
		about: function() {
			this.transitionToRoute('about');
		}
	}
});

App.CredentialIndexController = Ember.ObjectController.extend({
	needs: 'credentialsIndex',
	credentials: Ember.computed.alias('controllers.credentialsIndex'),
	clock: Ember.computed.alias('controllers.credentialsIndex'),

	hexKey: function() {
		return base32_decode(this.get('key'));
	}.property('key'),

	progress: function() {
		unixTime = this.get('clock.unixTimeMiliseconds') / 1000;

		return ((unixTime - this.get('offset')) / this.get('timeStep')) % 1;
	}.property('clock.unixTimeMiliseconds', 'offset', 'timeStep'),

	token: function() {
		try {
			return totp(this.get('hexKey'),
					this.get('clock.unixTime'),
					this.get('timeStep'),
					this.get('hash'),
					this.get('codeLength'),
					this.get('offset'));
		} catch(e) {
			console.error(e);
			return null;
		}
	}.property('hexKey', 'clock.unixTime', 'timeStep', 'hash', 'codeLength', 'offset')
});
