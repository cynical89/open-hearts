"use strict";

// TODO: remove this!
const model = require("../models/game");

module.exports = {
	getGame: function* getGame(id) {
		console.log("getGame");
		const game = model.newGame(4);
		game.id = id;
		game.error = false;
		return game;
	},
	saveGame: function* saveGame(document) {
		const game = model.newGame(4);
		game.id = document.id;
		game.error = false;
		return game;
	}
};
