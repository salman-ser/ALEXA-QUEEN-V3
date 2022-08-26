global.language = "en"
global.nomerOwner ="27686881509"
global.nomerOwner2 = "919961857267"
global.runWith = "Heroku"
global.ownerName = "CYBERXKID"
global.botName = "ALEXA QUEEN'" 
global.sessionName ="session"
global.setmenu ="gif"
global.docType = "docx"
global.Qoted = "ftoko"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = "© alexa" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="ALEXA QUEEN"
global.packName = "ALEXA QUEEN"
global.authorName = "CYBERXKID"
global.replyType = "web"
global.setwelcome = "type3"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.gcount = {
prem : 60,
user : 20
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






