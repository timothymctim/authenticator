App.Credential = DS.Model.extend({
	title: DS.attr('string'),
	key: DS.attr('string'),
	timeStep: DS.attr('number', {defaultValue: 30}),
	hash: DS.attr('string', {defaultValue: 'SHA-1'}),
	codeLength: DS.attr('number', {defaultValue: 6}),
	offset: DS.attr('number', {defaultValue: 0})
});
