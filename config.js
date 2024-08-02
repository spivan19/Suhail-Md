const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="spivanfotie15@gmail.com"
global.location="Kielce.Pologne"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://spiroudi:larousse@database.toc8tw9.mongodb.net/?retryWrites=true&w=majority&appName=DataBase"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sparkly_agency_user:dyruJXL0qkY0COw0CqVpAVQOxFWYwVk7@dpg-cqliunjv2p9s73au1skg-a.oregon-postgres.render.com/sparkly_agency"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/spivan19/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "48699543233" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237693290992";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48699543233";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_12_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlPbTNPY3Zra092ZmlSbXhuOUozMTZoMXlQT2I4SXA5aGlxWlM4dUF6Yjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNfV0dhQl8xVHhDcFotUzlxMFVhSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjI5ZDIxMzktNGEyYy00MDZhLTk2N2YtZGNjNGZhODgzYmJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDE1MSxcbiAgICAgIDIzLFxuICAgICAgOTAsXG4gICAgICAxOTEsXG4gICAgICAxMDgsXG4gICAgICAxMTMsXG4gICAgICAyNSxcbiAgICAgIDYsXG4gICAgICA1MCxcbiAgICAgIDIsXG4gICAgICAxMTgsXG4gICAgICAxNDUsXG4gICAgICAxNDIsXG4gICAgICA0LFxuICAgICAgMjQ0LFxuICAgICAgMTUsXG4gICAgICAyNTAsXG4gICAgICAyMixcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNjIsXG4gICAgICAxNDksXG4gICAgICAyMCxcbiAgICAgIDAsXG4gICAgICAxMjcsXG4gICAgICAzNyxcbiAgICAgIDI1NCxcbiAgICAgIDEwNyxcbiAgICAgIDE2LFxuICAgICAgMTU0LFxuICAgICAgNjAsXG4gICAgICAyNSxcbiAgICAgIDM3LFxuICAgICAgMTY5LFxuICAgICAgMTQ3LFxuICAgICAgNjcsXG4gICAgICAyMjQsXG4gICAgICAzNyxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJER1NCNFZRNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDg2OTk1NDMyMzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDAyNzQzNzgxMjUzNjc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVHU5dWNGRU4va3NMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlkzdnhQd2tpWldIdHF1ZTlYYjFQMUxQcjFTR1BqQ1ZjbkF1TFJqMG85QzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialZ3dWxPNHdkVHRreWVNeS9ENGdMV0lUT3d4KzNQeU1VN21VMklxQkZvOHFXMHRYYlNXNDhWSk15U3B2eDBqVU00ellVT2NZMEVoTDVQbTY0VXNyQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRS96VUx6V1hhM1JQajVIdHEveWlmSU1FcTZFRW1PREdVSnIwTStoR0p4YmpnWTZjMnIrclZKaG81U3hJeVMrWjBZOUw1TGtPNjNhempkSEFMam1CalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDg2OTk1NDMyMzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTYxMTIyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Broken",
  packname: process.env.PACK_NAME || "Forever Alone.",
  botname : process.env.BOT_NAME  || "Lonely v2",
  ownername:process.env.OWNER_NAME|| "Broken",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
