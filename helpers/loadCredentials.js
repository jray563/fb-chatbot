const request = require('request')

const facebook_token = 'EAAHSLZCHYTVsBADQnI8lqfrjF0vigs7iNFFKejg4CZC796R3lZAyZB9EvAvhpbdbXV5jXZAPRAkZA6NSixm1znSaU4me3FpYGspXx5QWk66E4a2usAUi8BcaW6ZC9VZCitwHjl7xGsBgFkanfENnXnzPxSLGDWmiSxRZBpZBh8XN3h1gZDZD'
const weather_token = 'fdaf5d615bfe95a5a55ede0f066b9509'
const zip_code = '95124'
const dialogflow_token = 'a6e7d50d08514ee095c1f1667257588c'

const sendTextMessage = (senderId, text) => {
	request({
		 url: 'https://graph.facebook.com/v2.6/me/messages',
		 qs: { access_token: facebook_token },
		 method: 'POST',
		 json: {
		 recipient: { id: senderId },
		 message: { text },
		}
	 })
}

const sendImageMessage = (senderId, img_url) => {
	console.log(img_url)
	request({
		 url: 'https://graph.facebook.com/v2.6/me/messages',
		 qs: { access_token: facebook_token },
		 method: 'POST',
		 json: {
		 recipient: { id: senderId },
		 message: { attachment: { type:"image", payload: { url: img_url, is_reusable: true} } },
		}
	 })
}

module.exports = {
	sendText: sendTextMessage,
	sendImage: sendImageMessage,
	wt_token: weather_token,
	dialog_token: dialogflow_token,
	zip: zip_code
}