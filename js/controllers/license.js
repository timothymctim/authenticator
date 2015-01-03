App.LicenseController = Ember.ObjectController.extend({
	actions: {
		back: function() {
			this.transitionToRoute('about');
		}
	}
});
