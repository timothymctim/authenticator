App.AboutController = Ember.ObjectController.extend({
	thirdPartySoftware: [{
		author: 'Yehuda Katz, Tom Dale, and Ember.js contributors',
		link: 'license.emberJs',
		name: 'Ember.JS',
		url: 'http://emberjs.com/'
	}, {
		author: 'Mozilla Foundation',
		link: 'license.buildingBlocks',
		name: 'Firefox OS Building Blocks',
		url: 'http://buildingfirefoxos.com/'
	}, {
		author: 'Brian Turek',
		link: 'license.jsSHA',
		name: 'jsSHA',
		url: 'https://github.com/Caligatio/jsSHA'
	}, {
		author: 'LivingSocial Inc., Tilde, Inc., and contributors',
		link: 'license.emberData',
		name: 'Ember Data',
		url: 'https://github.com/emberjs/data'
	}, {
		author: 'Ryan Florence',
		link: 'license.emberLocalStorage',
		name: 'Ember Data Local Storage Adapter',
		url: 'https://github.com/kurko/ember-localstorage-adapter'
	}, {
		author: 'James A. Rosen',
		link: 'license.emberI18n',
		name: 'Ember-I18n',
		url: 'https://github.com/jamesarosen/ember-i18n'
	}],

	actions: {
		back: function() {
			this.transitionToRoute('application');
		}
	}
});
