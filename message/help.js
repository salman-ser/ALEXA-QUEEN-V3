const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Kolkata').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Kolkata').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Kolkata').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {weton,week,calender,dateIslamic} = require('../lib/functions')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Kolkata").locale("id");

//Total features by team liza mwol
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/msg.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "[_Error!_]"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./database/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./database/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



exports.allmenu =  (getLimit, senderNumber, limitCount, user, getBalance, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var balance =  getBalance(senderNumber, user).toLocaleString() 
} catch{ 
var balance = getBalance(senderNumber, user)
}
return `
*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bᴏᴛ Nᴀᴍᴇ :  ${botName}*
*│* *│* *Dᴀᴛᴇ : ${week}, ${calender}*
*│* *╰────────────────❊*
*│*    *㊏───ɪɴғᴏ───㊏*
*│* *╭─────────────────❊*
*│* *│* *ɴᴀᴍᴇ :* ${pushname}
*│* *│* *sᴛᴀᴛᴜs: ${isPremium ? '🎫 Premium':'Free'}*
*│* *│* *ʟɪᴍɪᴛ : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*
*│* *│* *ʙᴀʟᴀɴᴄᴇ : ʀᴘ ${balance}*
*│* *│* *ʀᴜɴɴɪɴɢ ᴏɴ: ${runWith}*
*│* *│* *ᴍᴏᴅᴇ : ${publik ? "Public" : "Self"}*
*│* *│* *ᴛɪᴍᴇ : ${timeWib}*
*│* *│* *ʜɪᴛ ᴛᴏᴅᴀʏ : ${thisHit.toLocaleString()}*
*│* *│* *ᴛᴏᴛᴀʟ ғᴇᴀᴛᴜʀᴇs : ${totalFitur()}*
*│* *│* *ᴛᴏᴛᴀʟ ᴇʀʀᴏʀ : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}*
*│* *│* *ᴛᴏᴛᴀʟ ᴜsᴇʀ : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}*
*│* *│* *ᴜsᴇʀ ʙᴀɴɴᴇᴅ : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}*
*│* *│* *ᴜsᴇʀ ʙʟᴏᴄᴋᴇᴅ : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length.toLocaleString()}*
*│* *│* *ᴄᴍᴅ ʙʟᴏᴄᴋᴇᴅ : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*

  *㊏────ᴄᴏᴍᴍᴀɴᴅs────㊏*
  `}

exports.fitur = (prefix) => {
return`
*╭─────────────────❊*
*│*  *㊏──ɢʀᴏᴜᴘ ᴍᴇɴᴜ──㊏*
*│* 
*│*  *${prefix}ᴀɴᴛɪʟɪɴᴋ*
*│*  *${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ*
*│*  *${prefix}ᴀɴᴛɪᴠɪʀᴛᴇx*
*│*  *${prefix}ɪɴғᴏɢᴄ*
*│*  *${prefix}ɪɴᴠɪᴛᴇ*
*│*  *${prefix}sᴇᴛᴘᴘɢᴄ*
*│*  *${prefix}sᴇᴛɴᴀᴍᴇɢᴄ*
*│*  *${prefix}sᴇᴛᴅᴇsᴄ*
*│*  *${prefix}ᴍᴜᴛᴇ*
*│*  *${prefix}ᴜɴᴍᴜᴛᴇ*
*│*  *${prefix}ʀᴇᴠᴏᴋᴇ*
*│*  *${prefix}ᴛᴀɢ*
*│*  *${prefix}ᴛᴀɢᴀʟʟ*
*│*  *${prefix}ᴋɪᴄᴋ*
*│*  *${prefix}ᴀᴅᴅ*
*│*  *${prefix}ᴏᴘᴇɴᴛɪᴍᴇ*
*│*  *${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ*
*│*  *${prefix}ᴅᴇᴍᴏᴛᴇ*
*│*  *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
*│*  *${prefix}ʟᴇᴀᴠᴇ*
*│*  *${prefix}ʙᴀɴᴄʜᴀᴛ*
*│*  *${prefix}ᴜɴʙᴀɴᴄʜᴀᴛ*
*│*  *${prefix}ʙᴀɴ*
*│*  *${prefix}ᴜɴʙᴀɴ*
*│*  *${prefix}ʟɪsᴛʙᴀɴ*
*│*  *${prefix}ɢᴇᴛᴘᴘɢᴄ*
*│*  *${prefix}ɢᴇᴛᴘᴘ*
*│*  *${prefix}ʟɪsᴛᴏɴʟɪɴᴇ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ᴍᴀɪɴ ᴍᴇɴᴜ──㊏*
*│* 
*│*  *${prefix}ᴍᴇɴᴜ*
*│*  *${prefix}ᴛʀ*
*│*  *${prefix}ʀᴜɴᴛɪᴍᴇ*
*│*  *${prefix}sᴘᴇᴇᴅ*
*│*  *${prefix}ss*
*│*  *${prefix}ǫᴜᴏᴛᴇs*
*│*  *${prefix}ʏᴛᴍᴘ4*
*│*  *${prefix}ʏᴛᴍᴘ3*
*│*  *${prefix}ᴄʜᴀᴛ*
*│*  *${prefix}ʀᴜʟᴇs*
*│*  *${prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ*
*│*  *${prefix}sᴘᴇᴇᴅᴛᴇsᴛ*
*│*  *${prefix}ʟɪsᴛᴘᴄ*
*│*  *${prefix}ʟɪsᴛɢᴄ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ──㊏*
*│* 
*│*  *${prefix}ᴄᴇᴄᴀɴ*
*│*  *${prefix}ᴄᴏɢᴀɴ*
*│*  *${prefix}ᴀɴɪᴍᴇ*
*│*  *${prefix}ʟᴏʟɪ*
*│*  *${prefix}ᴍɪʟғ*
*│*  *${prefix}ʜᴜsʙᴜ*
*│*  *${prefix}ᴄᴏsᴘʟᴀʏ*
*│*  *${prefix}ᴡᴀʟʟᴍʟ*
*│*  *${prefix}ᴘᴀᴛʀɪᴄᴋ*
*│*  *${prefix}ɢᴜʀᴀ*
*│*  *${prefix}ᴅᴏɢᴇ*
*│*  *${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀs*
*│*  *${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀᴍᴏʙɪʟᴇ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ᴄᴏɴᴠᴇʀᴛᴇʀ──㊏*
*│* 
*│*  *${prefix}ᴘʜᴏᴛᴏ*
*│*  *${prefix}ᴍᴘ3*
*│*  *${prefix}ᴜʀʟ*
*│*  *${prefix}ᴍᴘ4*
*│*  *${prefix}ᴛᴏᴘᴛᴛ*
*│*  *${prefix}ᴛᴏɢɪғ*
*│*  *${prefix}ᴠᴏʟᴜᴍᴇ*
*│*  *${prefix}ʜᴏᴅᴇ*
*│*  *${prefix}ɢʜᴏsᴛ*
*│*  *${prefix}ɴɪɢʜᴛᴄᴏʀᴇ*
*│*  *${prefix}ᴛᴜᴘᴀᴜɪ*
*│*  *${prefix}ɪᴍᴜᴛ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴀᴘ*
*│*  *${prefix}ᴇᴍᴏᴊɪɢᴏ*
*│*  *${prefix}ᴇᴍᴏᴊɪsᴀ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴍs*
*│*  *${prefix}ᴇᴍᴏᴊɪᴡᴀ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴛᴡ*
*│*  *${prefix}ᴇᴍᴏᴊɪғʙ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴊᴘ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴏᴍ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴇᴅ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴍᴇs*
*│*  *${prefix}ᴇᴍᴏᴊɪʟᴛ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴍᴏ*
*│*  *${prefix}ᴇᴍᴏᴊɪᴍɪx*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──sᴛɪᴄᴋᴇʀ──㊏*
*│* 
*│*  *${prefix}sᴛɪᴄᴋᴇʀ*
*│*  *${prefix}sᴍᴇᴍᴇ*
*│*  *${prefix}ᴛʀɪɢɢᴇʀᴇᴅ*
*│*  *${prefix}ᴡᴀsᴛᴇᴅ*
*│*  *${prefix}ᴄᴏᴍʀᴀᴅᴇ*
*│*  *${prefix}ʜᴏʀɴʏ*
*│*  *${prefix}ʙʟᴜʀ*
*│*  *${prefix}ᴘɪxᴇʟᴀᴛᴇ*
*│*  *${prefix}sɪᴍᴘᴄᴀʀᴅ*
*│*  *${prefix}ʟᴏʟɪᴄᴇ*
*│*  *${prefix}ɢʟᴀss*
*│*  *${prefix}ᴛᴀᴋᴇ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ᴅᴏᴡɴʟᴏᴀᴅᴇʀ──㊏*
*│* 
*│*  *${prefix}sᴏɴɢ*
*│*  *${prefix}ᴘʟᴀʏ*
*│*  *${prefix}ᴘʟᴀʏᴍᴜsɪᴄ*
*│*  *${prefix}ɪɢ*
*│*  *${prefix}ɪᴍɢ*
*│*  *${prefix}ᴛɪᴋᴛᴏᴋ*
*│*  *${prefix}ᴛɪᴋᴛᴏᴋᴍᴜsɪᴄ*
*│*  *${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴡᴍ*
*│*  *${prefix}ᴘɪɴᴛᴇʀᴇsᴛ*
*│*  *${prefix}sᴘᴏᴛɪғʏ*
*│*  *${prefix}ᴍᴇᴅɪᴀғɪʀᴇ*
*│*  *${prefix}ɢɪᴛʜᴜʙᴅʟ*
*│*  *${prefix}ɢɪᴛᴄʟᴏɴᴇ*
*│*  *${prefix}ɪɢsᴛᴏʀʏ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ᴛᴇxᴛ ᴘʀᴏ──㊏*
*│* 
*│*  *${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ*
*│*  *${prefix}ɢʟɪᴛᴄʜ*
*│*  *${prefix}ɢʟɪᴛᴄʜ2*
*│*  *${prefix}ɢʟɪᴛᴄʜ3*
*│*  *${prefix}ʟɪᴏɴ*
*│*  *${prefix}3ᴅɴᴇᴏɴ*
*│*  *${prefix}3ᴅsᴘᴀᴄᴇ*
*│*  *${prefix}ɴᴇᴏɴ*
*│*  *${prefix}ɢʀᴇᴇɴɴᴇᴏɴ*
*│*  *${prefix}ʙᴏᴋᴇʜ*
*│*  *${prefix}ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ*
*│*  *${prefix}ʙᴇᴀʀ*
*│*  *${prefix}ᴡᴏʟғ*
*│*  *${prefix}ᴊᴏᴋᴇʀ*
*│*  *${prefix}ᴅʀᴏᴘᴡᴀᴛᴇʀ
*│*  *${prefix}ɴᴇᴏɴʟɪɢʜᴛ*
*│*  *${prefix}ᴛʜᴇᴡᴀʟʟ*
*│*  *${prefix}ɴᴀᴛᴜʀᴀʟ*
*│*  *${prefix}ᴄᴀʀʙᴏɴ*
*│*  *${prefix}ᴘᴇɴᴄɪʟ*
*│*  *${prefix}ʟᴜxᴜʀʏ*
*│*  *${prefix}ᴡʜɪᴛᴇɢᴏʟᴅ*
*│*  *${prefix}ʟɪɢʜᴛɢʟᴏᴡ*
*│*  *${prefix}ᴀʀᴄᴀɴᴇ*
*│*  *${prefix}ᴠᴀʟᴇɴᴛɪɴᴇ*
*│*  *${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ*
*│*  *${prefix}ᴄᴏʟᴏʀʟᴇᴅ*
*│*  *${prefix}3ᴅʀᴇᴛʀᴏ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ɪᴍᴀɢᴇ ᴍᴀᴋᴇʀ──㊏*
*│* 
*│*  *${prefix}ᴡᴀɴᴛᴇᴅ*
*│*  *${prefix}ᴜᴛᴀᴛᴏᴏ*
*│*  *${prefix}ᴜɴsʜᴀʀᴘᴇɴ*
*│*  *${prefix}ᴛʜᴀɴᴏs*
*│*  *${prefix}sɴɪᴘᴇʀ*
*│*  *${prefix}sʜᴀʀᴘᴇɴ*
*│*  *${prefix}sᴇᴘɪᴀ*
*│*  *${prefix}sᴄᴀʀʏ*
*│*  *${prefix}ʀɪᴘ*
*│*  *${prefix}ʀᴇᴅᴘʟᴇ*
*│*  *${prefix}ʀᴇᴊᴇᴄᴛᴇᴅ*
*│*  *${prefix}ᴘᴏsᴛᴇʀɪᴢᴇ*
*│*  *${prefix}ᴘs4*
*│*  *${prefix}ᴘɪxᴇʟɪᴢᴇ*
*│*  *${prefix}ᴍɪssɪᴏɴᴘᴀssᴇᴅ*
*│*  *${prefix}ᴍᴏᴜsᴛᴀᴄʜᴇ*
*│*  *${prefix}ʟᴏᴏᴋᴡʜᴀᴛᴋᴀʀᴇɴʜᴀᴠᴇ*
*│*  *${prefix}ᴊᴀɪʟ*
*│*  *${prefix}ɪɴᴠᴇʀᴛ*
*│*  *${prefix}ɪɴsᴛᴀɢʀᴀᴍ*
*│*  *${prefix}ɢʀᴇʏsᴄᴀʟᴇ*
*│*  *${prefix}ɢʟɪᴛᴄʜ4*
*│*  *${prefix}ɢᴀʏ*
*│*  *${prefix}ғʀᴀᴍᴇ*
*│*  *${prefix}ғɪʀᴇ*
*│*  *${prefix}ᴅɪsᴛᴏʀᴛ*
*│*  *${prefix}ᴅɪᴄᴛᴀᴛᴏʀ*
*│*  *${prefix}ᴅᴇᴇᴘғʀʏ*
*│*  *${prefix}ᴅᴅᴜɴɢᴏᴇɴ*
*│*  *${prefix}ᴄɪʀᴄʟᴇ*
*│*  *${prefix}ᴄʜᴀʟʟᴇɴɢᴇʀ*
*│*  *${prefix}ʙᴜʀɴ*
*│*  *${prefix}ʙʀᴀᴢᴢᴇʀs*
*│*  *${prefix}ʙᴇᴀᴜᴛɪғᴜʟ*
*│*  *${prefix}ᴀᴘᴘʀᴏᴠᴇᴅ*
*│*  *${prefix}3000ʏᴇᴀʀs*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──sᴇᴀʀᴄʜ ᴍᴇɴᴜ──㊏*
*│* 
*│*  *${prefix}ʟɪʀɪᴋ*
*│*  *${prefix}ɢʀᴜᴘᴡᴀ*
*│*  *${prefix}ʏᴛs*
*│*  *${prefix}ғɪɴᴅ*
*│*  *${prefix}ᴡʜᴀᴛᴀɴɪᴍᴇ*
*│*  *${prefix}ɢᴏᴏɢʟᴇ*
*│*  *${prefix}ᴋʙʙɪ*
*│*  *${prefix}ᴡᴇᴀᴛʜᴇʀ*
*│*  *${prefix}ᴋᴏᴅᴇᴘᴏs*
*│*  *${prefix}ʙʀᴀɪɴʟʏ*
*│*  &${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──sʜᴏʀᴛ ᴜʀʟ──㊏*
*│* 
*│*  *${prefix}ᴛɪɴʏᴜʀʟ*
*│*  *${prefix}ʙɪᴛʟʏ*
*│*  *${prefix}ᴛᴏᴜʀʟ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──sᴇᴛᴛɪɴɢ ʙᴏᴛ──㊏*
*│* 
*│*  *${prefix}sᴇᴛᴘʀᴇғɪx*
*│*  *${prefix}sᴇᴛᴛʜᴜᴍʙ*
*│*  *${prefix}sᴇᴛᴘᴘʙᴏᴛ*
*│*  *${prefix}sᴇᴛғᴀᴋᴇɪᴍɢ*
*│*  *${prefix}sᴇᴛɪᴍɢʀᴇᴘʟʏ*
*│*  *${prefix}sᴇᴛɪᴍɢɪɴғᴏ*
*│*  *${prefix}sᴇᴛʀᴇᴘʟʏ*
*│*  *${prefix}sᴇᴛʙɪᴏ*
*│*  *${prefix}sᴇᴛɢɪғ*
*│*  *${prefix}sᴇᴛғᴀᴋᴇɢɪғ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──sᴛᴏʀᴀɢᴇ──㊏*
*│* 
*│*  *${prefix}ᴀᴅᴅᴇʀʀᴏʀ*
*│*  *${prefix}ᴀᴅᴅsᴛɪᴄᴋ*
*│*  *${prefix}ᴀᴅᴅᴠɴ*
*│*  *${prefix}ᴅᴇʟᴠɴ*
*│*  *${prefix}ᴅᴇʟsᴛɪᴋ*
*│*  *${prefix}ᴄʟᴇᴀʀᴀʟʟᴇʀʀᴏʀ*
*│*  *${prefix}ʟɪsᴛsᴛɪᴋ*
*│*  *${prefix}ʟɪsᴛᴇʀʀᴏʀ*
*╰─────────────────❊*
   
*╭─────────────────❊*
*│* *㊏──ɪsʟᴀᴍɪᴄ──㊏*
*│* 
*│*  *${prefix}ʜᴀᴅɪs*
*│*  *${prefix}ᴀʟǫᴜʀᴀɴ*
*│*  *${prefix}ᴛᴀғsɪʀsᴜʀᴀʜ*
*╰─────────────────❊*

*╭─────────────────❊*   
*│* *㊏──ɢᴀᴍᴇ──㊏*
*│* 
*│*  *${prefix}ᴍᴀᴛʜ*
*╰─────────────────❊*

*╭─────────────────❊*
*│* *㊏──ᴏᴡɴᴇʀ ᴍᴇɴᴜ──㊏*
*│* 
*│*  *${prefix}ᴊᴏɪɴ*
*│*  *${prefix}ʙᴄ*
*│*  *${prefix}ʙᴄɢᴄ*
*│*  *${prefix}sᴇᴛᴇxɪғ*
*│*  *${prefix}sᴇᴛʟᴀɴɢ*
*│*  *${prefix}ʀᴇᴀᴄᴛ*
*│*  *${prefix}ʙʟᴏᴄᴋ*
*│*  *${prefix}ᴜɴʙʟᴏᴄᴋ*
*│*  *${prefix}ɢᴇᴛᴄᴀᴢᴇ*
*│*  *${prefix}ɢᴇᴛsᴇsɪ*
*│*  *${prefix}ᴀᴜᴛᴏʟᴇᴠᴇʟ*
*╰─────────────────❊*
   
*╭─────────────❊*
*│* *ᴛʜᴀɴᴋs ᴛᴏ*
*│* 
*│* *ᴄʏʙᴇʀxᴋɪᴅ*
*│* *ᴛᴏxɪᴄ-ᴋɪᴄʜᴜ*
*╰─────────────❊*

`+'     *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ᴡɪᴛʜ ɴᴏᴅᴇᴊs*'
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
