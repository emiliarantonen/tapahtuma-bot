import TelegramBot from 'node-telegram-bot-api';

import dotenv from 'dotenv';
dotenv.config();

import {getEvents} from './scaper.js'

const token = process.env.BOT_TOKEN; // Get the telegram bot token
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/titetapahtumat') {
        const events = await getEvents();

        let responseMessage = 'Titen tulevat tapahtumat:\n\n';

        events.forEach((event) => {
            responseMessage += `${event.eventName} \n${event.startDate}\nLocation: ${event.location}\n\n`;
            });

        bot.sendMessage(chatId, responseMessage);
      }
  
  });