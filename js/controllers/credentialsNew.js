App.CredentialsNewController = App.CredentialsEditController.extend({
	editMode: false,
	isInvalid: true,

	init: function() {
		this.resetForm();
		this._super();
	},

	resetForm: function() {
		this.setProperties({
			title: '',
			key: '',
			timeStep: 30,
			hash: 'SHA-1',
			codeLength: 6,
			offset: 0
		});
	},

	actions: {
		cancel: function() {
			this.resetForm();
			this.transitionToRoute('credentials');
		},
		submit: function() {
			// Create the new model
			var credential = this.store.createRecord('credential', {
				title: this.get('title'),
				key: this.get('key'),
				timeStep: this.get('timeStep'),
				hash: this.get('hash'),
				codeLength: this.get('codeLength'),
				offset: this.get('offset')
			});

			// Clear the text fields
			this.resetForm();

			credential.save();

			this.transitionToRoute('credentials');
		},
	}
});
