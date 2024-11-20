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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_14_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUFoMG00OVVaaEFzK3pTdEhGYmJXa3ZwUUxWWjZXSmhDTHptTlVDUFpnYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODc2NTk2MTc4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0EyMjcwNDExRkJBODVCNjgwMkE2Q0MzODFENUQ4OEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMTIyODYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjU5NjE3ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE0N0IwNjM2MzY4QzkxOEJBRjMwQTM1Mzk2QjFFMDhBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjEyMjg2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0XzBZY3ktcVRTYTZZUXpOOTBLZmxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkOGE1NTBmLTAzYjAtNDAzMy1hOTdmLWUxZDU5YWFmYmE1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAxNDcsXG4gICAgICAyMjIsXG4gICAgICAwLFxuICAgICAgMjA5LFxuICAgICAgNTUsXG4gICAgICAxNjEsXG4gICAgICAyMjYsXG4gICAgICAxOTksXG4gICAgICA0MyxcbiAgICAgIDE5MixcbiAgICAgIDIyOCxcbiAgICAgIDEwMyxcbiAgICAgIDIzMCxcbiAgICAgIDQxLFxuICAgICAgNDMsXG4gICAgICAyMDUsXG4gICAgICAxMzksXG4gICAgICAyMDgsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgNjcsXG4gICAgICA0OCxcbiAgICAgIDEzMyxcbiAgICAgIDY3LFxuICAgICAgMjgsXG4gICAgICA2OSxcbiAgICAgIDIzNSxcbiAgICAgIDIzNCxcbiAgICAgIDIsXG4gICAgICAxNDYsXG4gICAgICAxMixcbiAgICAgIDI0MixcbiAgICAgIDgwLFxuICAgICAgMjM1LFxuICAgICAgMTE0LFxuICAgICAgNDYsXG4gICAgICAzMyxcbiAgICAgIDY5LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo4WDUzQUhNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2NTk2MTc4MDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NzQ4MDM3MTk4MDM2OjIzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkV0aGl4IE1EIEJvdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012Vmw1Y0NFT1d4K0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnhSdEZlZm5keWFlYk5zQmwzT0tMVmt4Nzh4cFErMzI0RFRzWmRhb0hBOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqaVZxdzBLZHdYaDNKbUVUVXVjaVVaWkdNVnpYQ1dlbCtNUkx6TmVZRVlMY0o3MkpuZWlmZXNMaVNtbFVNUUQvcFFGR2ZzdkhDTjAvbWozeFNZQytDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUYTNhT3hQQ0hSdWxqaVhkNm50SjAvNWZ6TjBaN3ZNRzJVZkQxSjZVZWxDK0NGMnlTbG0yT1VsNUJVTFk0eWoxem1taGlCdkMwaG03d1RUZU9CMnJBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2NTk2MTc4MDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxMjI4NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHbDRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdsNC5qc29uIjogIntcImtleURhdGFcIjpcIi9oaDI2YVJvOHBMUUQ4SWZ4cGlWTlhYVENlaDg4QllWYkswbHA3QUw0cFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTg1NDkzMTk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIxMjI4NjA2MzdcIn0iCn0="  // PUT your SESSION_ID 


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
