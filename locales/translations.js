Ember.TextField.reopen(Em.I18n.TranslateableAttributes);
Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS=true;

var language = navigator.language;
var translation, defaultTranslation = {
	'about.app-includes': 'This app includes the following packages.',
	'about.license': 'License',
	'about.third-party-license': 'license',
	'about.third-party-software': '<a href="{{linkUrl}}" target="_blank">{{linkName}}</a> by {{author}}',
	'about.version': 'Version: {{version}}',
	'app.error': 'Oeps! Something went wrong.',
	'credential.add': 'Add credential',
	'credential.delete': 'Delete credential',
	'credential.edit': 'Edit credential',
	'digit.other': '{{count}} digits',
	'done': 'Done',
	'form.advanced': 'Advanced',
	'form.credential-key': 'Shared key',
	'form.credential-name': 'Credential name',
	'form.hash-algorithm': 'Hashing algorithm',
	'form.output-length': 'Output length',
	'form.time-offset': 'Time offset (seconds)',
	'form.time-step': 'Time step (seconds)',
	'index.add-new-credential': 'Add a new credential by selecting the <span class="icon">+</span> at the right top.',
	'index.header': 'Credentials',
	'update': 'Update',
};

if (/^en/i.test(language)) {
	Ember.I18n.locale = 'en';
} else if (/^nl/i.test(language)) {
	Ember.I18n.locale = 'nl';
	translation = {
		'about.app-includes': 'Deze app bevat de volgende software van derden:',
		'about.license': 'Licentie',
		'about.third-party-license': 'licentie',
		'about.third-party-software': '<a href="{{linkUrl}}" target="_blank">{{linkName}}</a> van {{author}}',
		'about.version': 'Versie: {{version}}',
		'app.error': 'Oeps! Er is iets misgegaan.',
		'credential.add': 'Toevoegen',
		'credential.delete': 'Verwijderen',
		'credential.edit': 'Bewerken',
		'digit.other': '{{count}} cijfers',
		'done': 'Klaar',
		'form.advanced': 'Geavanceerd',
		'form.credential-key': 'Gedeelde sleutel',
		'form.credential-name': 'Accountnaam',
		'form.hash-algorithm': 'Hashfunctie',
		'form.output-length': 'Lengte van de uitvoer',
		'form.time-offset': 'Relatieve tijd (seconden)',
		'form.time-step': 'Geldigheidsduur (seconden)',
		'index.add-new-credential': 'Voeg nieuwe credentialen toe door op de <span class="icon">+</span> rechts bovenin te klikken.',
		'index.header': 'Credentialen',
		'update': 'Wijzig',
	};
}

$.extend(defaultTranslation, translation);
Ember.I18n.translations = defaultTranslation;
