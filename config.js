const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="donatyemulgraveoffical@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://dontaye:dontayemulgrave@cluster0.kbglu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://dontaye:dontayemulgrave@cluster0.kbglu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Jamaica";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "16582148118" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '1658214811') : "16582148118";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,16582148118";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,16582148118";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,16582148118";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_55_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInErWTk5OXkrMGozL3Fza1Q4Sys0Uk5kZnFyRHAwT2RCMG92NVgvaFIwWU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhneTdHOGRXVHFhQS1KN0VOTVNUYkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjAxODdlZGMtNjMyMy00OGRkLThmZjgtOGNlNWZmZTY5YjYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDE0MixcbiAgICAgIDE3MCxcbiAgICAgIDEwNCxcbiAgICAgIDcxLFxuICAgICAgMTEwLFxuICAgICAgMzksXG4gICAgICAxNSxcbiAgICAgIDAsXG4gICAgICAyMixcbiAgICAgIDk4LFxuICAgICAgMjM1LFxuICAgICAgOCxcbiAgICAgIDIxNixcbiAgICAgIDIxNSxcbiAgICAgIDEwNyxcbiAgICAgIDI0MCxcbiAgICAgIDgyLFxuICAgICAgMTY3LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDYwLFxuICAgICAgMjEsXG4gICAgICAyMTUsXG4gICAgICAyMDcsXG4gICAgICAyNDQsXG4gICAgICAxMTYsXG4gICAgICAxNDAsXG4gICAgICAyNTEsXG4gICAgICAxMTUsXG4gICAgICAyNTAsXG4gICAgICAyMDAsXG4gICAgICA3MixcbiAgICAgIDI0MyxcbiAgICAgIDIxOSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MCxcbiAgICAgIDEyMyxcbiAgICAgIDI0NCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQM0ZQTVFLNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTY1ODIxNDgxMTg6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxODc2ODgxNzE5MzQ0OjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uMXZPNEJFTkMxK2JrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMEZjWW1kNmtrbHZ1Z0lIUXlCTmFBOUp2eW00SXd6U21DMUpheVlTczh5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2SmJxOHpIb0NrYUxKVjNyclBFOUZuQkNrbGd4TGJ4WWx2K2dvZEFtcWhSVER2NngvbGR0L1kwcFhZb3FTekhsdTFiQnplZk51WWJQbTBpY3Btd0JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5T216RnBMelFxenE0dUFKQ1NBWThTMUlGSmdDMjFQZ0FRbGRhMmErNkVjUWtpWUZIbGI0WUdJaUVpSFJ2T2VrL1MwS05lZHNNZjNaMklPa3l5elRqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNjU4MjE0ODExODo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxMzk3MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQa0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBrSy5qc29uIjogIntcImtleURhdGFcIjpcInVnZVM5NFVGT2E2d01GcGc3ZUNEbWVENHFpTkNMdEZVV2pmVmpNa25RSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTAwMTIwMjY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MTg1MjUwNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Suhail-XMD",
  packname: process.env.PACK_NAME || "Suhail-XMD",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "dontaye",


  errorChat : process.env.ERROR_CHAT || "16582148118",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
