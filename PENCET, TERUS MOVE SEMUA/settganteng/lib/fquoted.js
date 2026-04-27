const fs = require('fs')

const fquoted = {
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false,
    participant: '0@s.whatsapp.net'
  },
  message: {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: null,
      caption: "𝑁𝑒𝑋𝑎 𝑏𝑒𝑡𝑎",
      jpegThumbnail: null
    }
  }
};

module.exports = { fquoted };

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

