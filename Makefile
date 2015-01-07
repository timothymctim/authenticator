zip:
	rm authenticator.zip
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
		style/ \
		bower_components/jquery/dist/jquery.min.js \
		bower_components/handlebars/handlebars.min.js \
		bower_components/ember/ember.min.js \
		bower_components/ember-data/ember-data.min.js \
		bower_components/ember-localstorage-adapter/localstorage_adapter.js \
		bower_components/jssha/src/sha.js \
		js/ \
		img/icon-*.png \
		index.html \
		manifest.webapp
