Firefox OS authenticator
========================
Firefox OS authenticator app for one-time passwords ([RFC
6238](http://tools.ietf.org/html/rfc6238)).

Installation of dependencies
============================
Clone the repository and use [bower](http://bower.io/) to install the
dependencies.

    $ bower install

Generate the app icon
=====================
You can convert the app icon's SVG into a PNG using Inkscape.

    $ inkscape -z -e img/icon-128.png -w 128 -h 128 img/icon.svg
    $ inkscape -z -e img/icon-512.png -w 512 -h 512 img/icon.svg
