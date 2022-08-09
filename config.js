const fs = require("fs");
const chalk = require("chalk");

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "27686881509";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "kaguya"),
  (global.prefix = process.env.PREFIX || "-"),
  (global.author = process.env.AUTHOR || "CYBERXKID"),
  (global.sessionName = "alexa"),
  (global.name = process.env.NAME || "ALEXA QUEEN"),
  (global.thumb = fs.readFileSync("./trash/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
