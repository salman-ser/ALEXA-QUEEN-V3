{
  "name": "ALEXA QUEEN",
  "description": "alexa queen powered by cyberxkid",
  "repository": "https://github.com/Diegoson/ALEXA-QUEEN-V3/",
  "logo": "https://telegra.ph/file/324ba754638d6b0f97b94.jpg",
  "keywords": ["nodejs", "bot", "whatsapp bot", "whatsapp automation", "multi device"],
   "success_url": "/",
  "env": {
    "NAME": {
    "description": "Name of your bot(enter your bot name here"
    },
    "PREFIX": {
      "description": "Prefix of your bot(enter)your bot prefix here"
    },
    "MODS": {
      "description": "The phone numbers of the users who you want to be admin for the bot (should be in international format without + and multiple numbers must be separated by a comma \",\")",
      "required": false
    },
    "MONGODB": {
      "description": "A secret String for Mongodb Connection.(Required)"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
     "url": "https://github.com/ItsJimi/heroku-buildpack-pm2"
    },
    {
      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"
    },
    {
      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"
    }
  ],
   "formation": {
        "web": {
            "quantity": 1,
            "size": "free"
        }
    }
}
