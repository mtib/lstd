default:
	cat original/pixi.js > library.js
	cat original/howler.js >> library.js
	cat original/keyboard.js >> library.js
	cat original/functions.js >> library.js
	cat original/constants.js >> library.js

get:
	wget https://raw.githubusercontent.com/goldfire/howler.js/master/howler.js -O original/howler.js
	wget https://raw.githubusercontent.com/pixijs/pixi.js/master/bin/pixi.js -O original/pixi.js
