/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '068dd79b4eeb7102f9174159' // https://api.lolhuman.xyz
global.xzn = '068dd79b4eeb7102f9174159' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6287755567549' // Owner Utama
global.owner = ['6287755567549', '6285856575305'] // Owner Lainnya
global.namaowner = 'あ⁩ItsMeSubarシ' // Nama Owner
global.premium = ["6287755567549"] // Premium User
global.nobot = '6285856575305'
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'あ⁩SubarBotzོ' // NickBot
global.typemenu = 'v3' // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = 'v2' // 'v1' > 'v2'
global.autoread = true // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = 'Created By' // Watermark Sticker
global.author = 'あ⁩SubarBotzོ' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: '*Noh Selesai!!*',
    prem: 'Emangnya Elu _*PREMIUM*_',
    admin: 'Emangnya Elu _*Admin Grup*_',
    botAdmin: '*Bot Jadiin Admin Dulu !!* !',
    owner: 'Elu Bukan _*owner*_ Gw',
    group: 'Cuman Bisa Di _*Grup!!*_',
    private: 'Cuman Bisa Di _*Private Chat!!*_',
    wait: '*Tunggu Dulu, Masih Proses Nih!!*',    
    error: '_*Fiturnya Error B3G0*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/ItsMeSubar.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/GTcVDY465eVJg9XP2VvPKM'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
