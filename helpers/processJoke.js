const JOKE_LIST_COUNT = 168
const request = require('request')
const credentials = require('./loadCredentials')

module.exports = (event) => {
	const senderId = event.sender.id
	const message = event.message.text
	const fs = require('fs')

	jokeIndex = parseInt((Math.random()*JOKE_LIST_COUNT+1))
	joke = ""
	fs.readFile('../helpers/processJokeJokeList.json', (err, data) => {
		if (err) {console.log(err)}
		let jokeJSON = JSON.parse(data)
		joke = jokeJSON["Joke List"][["Joke "+jokeIndex]]
		credentials.sendText(senderId, joke)
	})
}