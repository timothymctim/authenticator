App.AboutController = Ember.ObjectController.extend({
	actions: {
		back: function() {
			this.transitionToRoute('application');
		}
	}
});
