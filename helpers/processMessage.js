//Processes messages with Google API.AI NLP
const credentials = require('./loadCredentials')
const request = require('request')
const apiAiClient = require('apiai')(credentials.dialog_token)

module.exports = (event) => {
	const senderId = event.sender.id
	const message = event.message.text
	const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'chatbot'})
	apiaiSession.on('response', (response) => {
		const result = response.result.fulfillment.speech
		credentials.sendText(senderId, result)
	})
	apiaiSession.on('error', error => console.log(error))
	apiaiSession.end()
}