# tapahtuma-bot
Telegram bot for fetching upcoming events from https://tietoteekkarikilta.fi/events using web scraping. 
The bot sends the upcoming events to the user as a text message. 

<img width="522" alt="Näyttökuva 2025-1-5 kello 22 57 29" src="https://github.com/user-attachments/assets/43da3dd2-f390-4c84-929a-9f4273f71ab5" />

# How to use?

## Telegram
To use the bot in Telegram, user needs a telegram-api token. 
User can get token from a @BotFather in Telegram.
Use the /newbot command to create a new bot. 
@BotFather will ask you for a name and username, 
then generate an authentication token for your new bot.
Set the name to /titetapahtumat.

Send the name as command /titetapahtumat, and the bot retruns the upcoming events.

## Set up environment
Create an .env file and set the token:
BOT_TOKEN="YOUR TOKEN"

install dependecies:
**npm install**

run the server to use the bot:
**node index.js**




