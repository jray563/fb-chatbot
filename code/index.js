'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => console.log('webhook is listening on port 3000'))

const verificationController = require('../controllers/verification')
const messageWebhookController = require('../controllers/messageWebhook')
app.get('/webhook', verificationController)
app.post('/webhook', messageWebhookController)

