# Discord.js Bot
Vic-Bot is one of the first Discord bots I created back in 2022. It features niche commands and functionality I added while tinkering with npm libraries.

# Features
## Text-To-Speech LLM responses via ChatGPT Completions
Vic-Bot can join a populated voice channel and be asked questions similar to Siri and Google with "Hey VicBot", it will then start listening to speech and conver it into text.
The text is then put through ChatGPT completions to produce a result, which is then read aloud through text-to-speech in the voice channel.
## Birthday Cron tasks
Vic-Bot can send a notification into a text channel notifying users of a birthday.
## AI Image generation
Using Dalle2 users can use the slash command generate-dalle followed by a prompt to generate an image using ChatGPT's Dalle2, an image is then returned into the chat after it is completed
## Valheim Server Restarter
Vic-Bot can SSH into the RaspberryPi hosting the Discord's Valheim Server to send commands to restart the Valheim server.
