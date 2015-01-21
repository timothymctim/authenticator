zip:
	if [ -f authenticator.zip ]; then rm authenticator.zip; fi
	zip -r authenticator.zip \
		bower_components/building-blocks/style/buttons.css \
		bower_components/building-blocks/style/headers.css \
		bower_components/building-blocks/style/input_areas.css \
		bower_components/building-blocks/style/layout.css \
		bower_components/building-blocks/style/lists.css \
		bower_components/building-blocks/style/progress_activity.css \
		bower_components/building-blocks/style/value_selector.css \
		bower_components/building-blocks/util.css \
		bower_components/building-blocks/fonts.css \
		bower_components/building-blocks/fonts/FiraSans/FiraSans-Regular.woff \
		bower_components/building-blocks/fonts/FiraSans/FiraSans-Light.woff \
		bower_components/building-blocks/style/headers/images/icons/add.png \
		bower_components/building-blocks/style/headers/images/icons/back.png \
		bower_components/building-blocks/style/headers/images/icons/close.png \
		style/ \
		bower_components/jquery/dist/jquery.min.js \
		bower_components/handlebars/handlebars.min.js \
		bower_components/ember/ember.min.js \
		bower_components/ember-data/ember-data.min.js \
		bower_components/ember-localstorage-adapter/localstorage_adapter.js \
		bower_components/jssha/src/sha.js \
		js/ \
		bower_components/ember-i18n/lib/i18n.js \
		bower_components/ember-i18n/lib/i18n-plurals.js \
		locales/ \
		img/icon-*.png \
		index.html \
		manifest.webapp
