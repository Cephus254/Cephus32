const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.Cephus🫡}
TEL;waid=${settings.254791215519}:${settings.254791215519}
END:VCARD
`;

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.Cephus🫡, 254791215519: [{ vcard }] },
    });
}

module.exports = ownerCommand;
