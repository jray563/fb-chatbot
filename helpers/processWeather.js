//Uses request module for API call
const request = require('request')
const credentials = require('./loadCredentials')

module.exports = (event) => {
	const senderId = event.sender.id
	const message = event.message.text
	const KELVIN = 273.15

	//Construct URL
	apiCallString = "https://api.openweathermap.org/data/2.5/weather?zip="+credentials.zip+"&APPID="+credentials.wt_token
	weatherPicIDString = "http://openweathermap.org/img/wn/"
	console.log(apiCallString)
	request(apiCallString, { json: true }, (err, res, body) => {
		if (err) {return console.log(err)}
		temp = (((body.main.temp - KELVIN) * 1.8) + 32).toFixed(2)
		weather = body.weather[0].description
		result = "You are near "+body.name+", where it is currently "+temp+"°F and the weather is "+weather+"."
		credentials.sendText(senderId, result)
		weatherPicIDString += (body.weather[0].icon+"@2x.png")
		credentials.sendImage(senderId, weatherPicIDString)
	})
}