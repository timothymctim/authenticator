Firefox OS authenticator
========================
Firefox OS authenticator app for one-time passwords ([RFC
6238](http://tools.ietf.org/html/rfc6238)).

The applications is build to be highly customizable, by allowing all the
options provided by the RFC 6238 and [RFC
4226](http://tools.ietf.org/html/rfc4226), and to respect Firefox OS's
default layout.
The options for adding a new token generator (a credential) are:
* time step (after how many seconds should a new token be generated)
* hashing algorithm (which SHA function should be used for the HMAC)
* output length (how many digits should the token consists of)
* time offset (how many seconds offset should there be with respect to
  Unix time)

To achieve the look and feel of a Firefox OS app, Mozilla's [Building
Blocks](https://developer.mozilla.org/en-US/Apps/Design/Firefox_OS_building_blocks)
is used.

![Screen shot of the main user interface.](screenshots/main.png
"Default view with a few added credentials")
![Screen shot showing several options.](screenshots/add.png
"View for adding a new credential")

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
