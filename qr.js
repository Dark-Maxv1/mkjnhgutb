const chalk = require('chalk');
const {WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const Axios = require('axios')

const msgs = '*⎝🛡️ ALPHA 🛡️⎠, යනු 🙂⎝🛡️ ALPHA 🛡️⎠Team විසින් ලියන ලද WhatsApp උපකාරක බොට් එකකි. එය ඔබගේ ගිණුමට ලොග් නොවේ 🔎 එය WhatsApp Web API මත ලියා ඇත. 🔏* \n\n වැඩි විස්තර පහතින් 👇'
const msg1 = '```⎝🛡️ ALPHA 🛡️⎠ Bot - ⎝🛡️ ALPHA 🛡️⎠ Userbot යනු සංවර්ධනය සඳහා විවෘත විවෘත මූලාශ්‍ර මෘදුකාංගයකි. \nවැරදි හෝ අනිසි භාවිතය නිසා ඇතිවිය හැකි සියලුම ප්‍රතිවිපාක සඳහා පරිශීලකයා වගකිව යුතුය. \nඑය විවෘත මූලාශ්‍ර ව්‍යාපෘතියක් බැවින්, ඕනෑම අයෙකුට මෘදුකාංගය පිටපත් කිරීමට, එකතු කිරීමට සහ ඉවත් කිරීමට,\nඑය තමන්ට අභිරුචි කරන ආකාරයෙන් භාවිතා කිරීමට හැකිය. ඊට අමතරව, ප්ලග්-ඉන් සහය පරිශීලකයින්ට \nඔවුන්ගේම ප්ලගීන මුල් මෘදුකාංගයට ස්ථාපනය කර ඔවුන්ට අවශ්‍ය පරිදි භාවිතා කිරීමට හැකියාව ලබා දෙයි.\nබොට් එක අරමුණකින් තොරව භාවිතා කිරීම ඔබව පැහැදිලිවම තහනම් කරනු ඇත.\nභාවිතා කිරීම සම්පූර්ණයෙන්ම පරිශීලකයාගේ වගකීමකි,⎝🛡️ ALPHA 🛡️⎠Userbot යනු \nයටිතල පහසුකම් පමණි. මෙහෙයුම් පද්ධතිය \nපසුව ස්ථාපනය කරන වැඩසටහන් සමඟ සිදු කරන වැඩ සඳහා වගකිව යුතු නොවේ, ⎝🛡️ ALPHA 🛡️⎠ \n භාවිතා කරන්නන්ගේ භාවිතයේ අරමුණ සහ ක්\u200dරමය සඳහා වගකිව යුතු නොවේ.\nඇල්ෆා මුදලට අලෙවි කිරීම, එය ලබා ගැනීමට හෝ කිසියම් ද්‍රව්‍යමය වටිනාකමක් තිබීම \nකිසිම දෙයක් සමඟ එය විකිණීමට ඉදිරිපත් කිරීම සපුරා තහනම්. මතුවිය හැකි සියලුම නීතිමය විමර්ශන \nපරිශීලකයා වගකිව යුතුය.```'
const warn = '```Userbot නිසා ; ඔබගේ WhatsApp ගිණුම තහනම් විය හැක. \nමෙය විවෘත මූලාශ්‍ර ව්‍යාපෘතියකි, ඔබ කරන සෑම දෙයකටම ඔබ වගකිව යුතුය. \nඇත්ත වශයෙන්ම, ⎝🛡️ ALPHA 🛡️⎠ විධායකයින් වගකීම් භාර නොගනී.\n⎝🛡️ ALPHA 🛡️⎠ පිහිටුවීමෙන්, ඔබ මෙම වගකීම් භාරගෙන ඇති බව සලකනු ලැබේ.```'
const msg2 = '```මෙම ව්‍යාපෘතිය විවෘත මූලාශ්‍රයක් බැවින් සියලුම කේත පැහැදිලිය. අඩු නැත වැඩි නැත; ඔබට අවශ්‍ය දේ බලන්න පුළුවන්. අපට ඔබගේ ගිණුම් වෙත ප්‍රවේශය නියත වශයෙන්ම නැත.```'
const msg3 = '```ඔබ ආරක්ෂාව ගැන සැලකිලිමත් වන්නේ නම්, ඔබට එය ඔබේ පරිගණකයේ ස්ථාපනය කළ හැකිය. ඔබගේ දත්ත වෙනත් අයෙකු ග්‍රහණය කර ගෙන ඇතැයි ඔබ සිතන්නේ නම්, Whatsapp> තිත් තුනක්> Whatsapp Web> සියලු සැසිවලින් ලොග්අවුට් බොත්තම ක්ලික් කරන්න.```'
const msg4 = '```ඇත්ත වශයෙන්ම නැත. ඒක කවදාවත් වෙන්නේ නැහැ. නමුත් ඔබට අපට පරිත්‍යාග කළ හැකිය.```'

async function Alpha () {
    const conn = new WAConnection();
    conn.version = [3,2147,14]
    conn.logger.level = 'warn'; 
    
    conn.on('connecting', async () => {
        console.log(`${chalk.blueBright.bold('⎝🛡️ ALPHA 🛡️⎠')}${chalk.red.bold('BOT QR CODE')}
${chalk.white.bold('version 4⎝🛡️ ALPHA 🛡️⎠ Bot QR Code')}

${chalk.green.bold('⚙ Connecting to Whatsapp Please wait...💹')}`);
    });
    
// 'AlphaX;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')

    conn.on('open', async () => {
        
        console.log(chalk.blueBright.bold("Creating your session..."))

        const rows = [
         {title: '🔎 ඔබගෙ QR කේතය.', description: '\n\nAlpha;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64') + '\n\n*⚠ Please Do Not Share This Code With Anyone!* ' + conn.user.name , rowId:"rowid1"},
         {title: '⎝🛡️ ALPHA 🛡️⎠ තොරතුරු', description: `\n\n${msg1}`, rowId:"rowid2"},
         {title: 'අවවාදයයි', description: `\n\n${warn}`, rowId:"rowid3"},
         {title: '🤔 ඔබට මගේ පණිවිඩය කියවිය හැකිද ?', description: `Answer a few frequently asked questions\n\n${msg2}`, rowId:"rowid4"},
         {title: '😐 අපේ ආරක්ෂාව ගැන කවර කතාද ?', description: `Answer a few frequently asked questions\n\n${msg3}`, rowId:"rowid5"},
         {title: '🤕 මෙය ගෙවනු ලැබේ ?', description: `Answer a few frequently asked questions\n\n${msg4}`, rowId:"rowid6"}
         ]

        const sections = [{title: " ⎝🛡️ ALPHA 🛡️⎠ Bot QR v.4", rows: rows}]

       const button = {
        buttonText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ',
        description: msgs ,
        sections: sections,
        listType: 1
        }
        
        await conn.sendMessage(conn.user.jid ,button, MessageType.listMessage)
        
        var alpha = await Axios.get(`https://telegra.ph/file/cd6032c65c27e0510ddad.jpg`, { responseType: 'arraybuffer' })
        
          await conn.sendMessage(conn.user.jid,Buffer.from(alpha.data), MessageType.image , {mimetype: Mimetype.png, caption: '*💹 Thanks for using ⎝🛡️ ALPHA 🛡️⎠*' , thumbnail: Buffer.from(alpha.data)})

        console.log(
            chalk.red('__________________________ COPY THIS CODE _________________________ \n'), 
            chalk.greenBright.bold('Alpha;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64'))
        );

        console.log(
            chalk.whiteBright.bold('\n⚠  Please Do Not Share This Code With Anyone '),
            chalk.red( conn.user.name ),
            chalk.blueBright.bold('\n\nif you can\'t copy the code, check your whatsapp number, its sent to your own number >>')
        );
//       process.exit(0);
    });

    await conn.connect();
}

Alpha ()
