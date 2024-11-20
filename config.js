const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="donatyemulgraveoffical@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://dontaye:dontayemulgrave@cluster0.kbglu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_41_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuaklsamJkM3o5d1pwamFBT1RWbXAzQjdJREtIb1dxNGcvVzQ3bG9qOVJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzY1MzE3ODUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRTcxQUVDNTA4MjFFRDNBRkU4MzAzMkZENjhGQkY1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIxMzg4NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODc2NTMxNzg1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Q5RjFBOTZCNEMzQzhEMzcxRDYyMjhFMkY5QTUwRDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMTM4ODU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjUzMTc4NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGNTUyQUNGMDFFMENGRDIyODlENDZCNEZEMkUyOUMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjEzODg2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzY1MzE3ODUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNEVBNkFCMjM1QjkwMDhDNUQyMjBDQkNGMDQ1Njg4NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIxMzg4NjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnhGVm40NGdUNFdpbGlhWU1yZVZkQVwiLFxuICBcInBob25lSWRcIjogXCI3YjI3YmIyOS02ZGY3LTQ0ZjMtOWRjMS1lMzFkZTVkNjQ3MzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMjQ1LFxuICAgICAgNDQsXG4gICAgICA3OCxcbiAgICAgIDQ4LFxuICAgICAgMzksXG4gICAgICAxNzIsXG4gICAgICA3NyxcbiAgICAgIDE0NCxcbiAgICAgIDE2NSxcbiAgICAgIDIxNCxcbiAgICAgIDE3LFxuICAgICAgMjMzLFxuICAgICAgNDQsXG4gICAgICA5MixcbiAgICAgIDIwNixcbiAgICAgIDgsXG4gICAgICA1MCxcbiAgICAgIDIwNCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTQzLFxuICAgICAgMjQ5LFxuICAgICAgMCxcbiAgICAgIDE5NyxcbiAgICAgIDIxLFxuICAgICAgMTM2LFxuICAgICAgMjM2LFxuICAgICAgOTcsXG4gICAgICAxMTYsXG4gICAgICAxOTksXG4gICAgICAyMTEsXG4gICAgICAxNTEsXG4gICAgICAyNTIsXG4gICAgICAxMjgsXG4gICAgICAxMDIsXG4gICAgICAxMSxcbiAgICAgIDI0MyxcbiAgICAgIDcxLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhBTjlQMTUyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2NTMxNzg1MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQ4MDI0NDc1NjA4Nzk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaVEwSTRGRU9TdStia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkp5Q3JDSTVBMWFwbGdhRHRJMm5qTERsV3J0OU5oUzFZQjc3b0hjZTk2Vms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDNLeHNsNHZWZWFjZ1lXN3BDL29ycWxmZXgrY3FDVEVSVlRMUWRTRVhuMlZHWGhNVFBIT1NVcGR4K05FZGt6RFNkZHZtajZaQkwyMnBJMmQyNzV6RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNEgxNW1qVmtOaEx1TTJiSERrZ1dvWlY4ejhGaldMZGRrS2R3aS83ZkdWeER1SFNYazRWUTM2MU5CSE1HM0g5TTV3amlxM0Q5U3QrdjRodlA0aU11anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTg3NjUzMTc4NTE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTM4ODU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU1TXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvbVRqM1dXYjkrMzRvcmFaUzM5VzJrTDhlTzdoQndLVmljOFMxdnhpNkR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzI4NTAyMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjEzODg1ODQyNFwifSIKfQ==="  // PUT your SESSION_ID 


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
