const processMessage = require('../helpers/processMessage')
const processWeather = require('../helpers/processWeather')
const processJoke = require('../helpers/processJoke')

module.exports = (req, res) => {
	if (req.body.object === 'page') {
		req.body.entry.forEach(entry => {
			entry.messaging.forEach(event => {
				if (event.message && event.message.text) {
					textCompare = event.message.text.toUpperCase()
					if (textCompare.includes('WEATHER')) {
						processWeather(event)
					}
					else if(textCompare.includes('JOKE')) {
						processJoke(event)
					}
					else{
					processMessage(event)
					}
				}
			})
		})
		res.status(200).end()
	}
}