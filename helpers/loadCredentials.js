const request = require('request')

const facebook_token = ''
const weather_token = ''
const zip_code = ''
const dialogflow_token = ''

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