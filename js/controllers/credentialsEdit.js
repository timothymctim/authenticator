App.CredentialsEditController = Ember.ObjectController.extend({
	editMode: true,
	isInvalid: false,
	hashes: ['SHA-1', 'SHA-256', 'SHA-512'],
	codeLengths: [
		{value: 6, label: Ember.I18n.t('digit', { count: 6 })},
		{value: 7, label: Ember.I18n.t('digit', { count: 7 })},
		{value: 8, label: Ember.I18n.t('digit', { count: 8 })}
	],

	formChanged: function() {
		Ember.run.once(this, 'validateForm');
	}.observes('title', 'key', 'timeStep'),

	validateForm: function() {
		// Title validity
		if (Ember.isEmpty(this.get('title'))) {
			$('[name=title]').each(function(index, element) { element.setCustomValidity("Title cannot be empty"); });
		} else {
			$('[name=title]').each(function(index, element) { element.setCustomValidity(""); });
		}

		// Key validity
		var hexKey = '';

		try {
			hexKey = base32_decode(this.get('key'));
		} catch(e) {
			console.error(e);
		}

		if (!hexKey) {
			$('[name=key]').each(function(index, element) { element.setCustomValidity("Wrong key format"); });
		} else {
			$('[name=key]').each(function(index, element) { element.setCustomValidity(""); });
		}

		// Validate all form fields
		var valid = true;
		$('input').each(function(index, element) {
			return valid = element.validity.valid;
		});

		this.set('isInvalid', !valid);
	},

	actions: {
		cancel: function() {
			this.get('model').rollback();

			this.transitionToRoute('credentials');
		},
		delete: function() {
			this.get('model').destroyRecord();

			this.transitionToRoute('credentials');
		},
		submit: function() {
			this.get('model').save();

			this.transitionToRoute('credentials');
		},
	}
});
