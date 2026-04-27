const fs = require('fs')

const config = {
    owner: "-",
    botNumber: "-",
    setPair: "NEXA1234",
    thumbUrl: "https://img1.pixhost.to/images/11766/686960881_zenn.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "\`𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿\`",
        group: "\`𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗨𝗻𝘁𝘂𝗸 𝗚𝗿𝗼𝘂𝗽\`",
        admin: "\`𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗔𝗱𝗺𝗶𝗻\`",
        private: "\`𝗳𝗶𝘁𝘂𝗿 𝘂𝗻𝘁𝘂𝗸 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁\`"
    },
    settings: {
        title: "NeXa Beta",
        packname: 'Nexa Version Beta',
        description: "NexaスクリプトのバグWhatsApp ",
        author: 'https://www.kyuurzy.tech',
        footer: "NeXa - 2026`"
    },
    newsletter: {
        name: "𝑁𝑒𝑋𝑎 𝐵𝑒𝑡𝑎",
        id: "120363415511005103@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@Settogantengjier",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/settoffc",
        ChannelWA: "https://whatsapp.com/channel/0029Vb5OwJVBKfhw3lEPiw03"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
