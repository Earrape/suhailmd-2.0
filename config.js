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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_01_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNxK296VnlBZUxlUHc3dExrWEFJZ3RvT2hGOCsxeDFUUUlJV0JjUlBmTW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjU5NjE3ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUxQUExMUM0NjM5NTFGNUQzNTczOUUxNUNFODIzODJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjIyMjg3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzY1OTYxNzgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NDE3MzZDNzExMkY4NzZCRjFERDUzMUJDQTYxRDM1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyMjI4NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjZqYnZEVkVTWUt0OXMyLWFyZFZGQVwiLFxuICBcInBob25lSWRcIjogXCJiYmIyNWNhOC03MjM3LTRhYjMtYmYyZS01OTYzNjA4NmIyNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAxMDUsXG4gICAgICAxNDMsXG4gICAgICAxMjMsXG4gICAgICA1NSxcbiAgICAgIDE2OSxcbiAgICAgIDc0LFxuICAgICAgMTAwLFxuICAgICAgNTksXG4gICAgICAxNzQsXG4gICAgICAzLFxuICAgICAgMzMsXG4gICAgICA2MixcbiAgICAgIDE1NSxcbiAgICAgIDgsXG4gICAgICAyMzQsXG4gICAgICAxMTMsXG4gICAgICA2MyxcbiAgICAgIDYwLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDI4LFxuICAgICAgMjE0LFxuICAgICAgMTExLFxuICAgICAgMTEzLFxuICAgICAgMTYxLFxuICAgICAgMjM0LFxuICAgICAgMTY4LFxuICAgICAgMTkzLFxuICAgICAgMTA3LFxuICAgICAgMTI1LFxuICAgICAgMTcxLFxuICAgICAgMTAwLFxuICAgICAgMjExLFxuICAgICAgODEsXG4gICAgICA0OSxcbiAgICAgIDc3LFxuICAgICAgMjI5LFxuICAgICAgMTgwLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFKS0c3V1BMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2NTk2MTc4MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NzQ4MDM3MTk4MDM2OjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkZVQ0tVSE1BREFUSUxMLkNPTVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqLzhvQUJFSlcvL3JrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK3BwTmR1cktDQjlUZklaNTJlUHNSb3lWQnhjVnFjM2JHTWM0RUJhLzdYWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiNWt1NEE2TkNJMU5CVWNTeTgzaXRWMzBCSmsvSUtEdTk4ZmovdkluWllQMnhMclg5cXUrOW9wYmlJdnYyQ3ZlOWpORWFmOVNKblRkeTIxdTE5QXJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHYnNVMGpURE50OTVNVXByMS9oTk1hMjZObFVoS0U2WEpocmFoQm9sYXdQK200dkxFdWsrT05GWnNsclh2NHRsbHpXdmtMUDB0YlNnWkx0aG1sVnVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2NTk2MTc4MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMjI4NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGTlpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZOWi5qc29uIjogIntcImtleURhdGFcIjpcIkRYa284YUY1NXpBRStzT3dZTnRoNmM0QlNOV2w1a2VOYmdyTWZYSDZYN0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcwMzE5NDk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIyMjI4NzMyODFcIn0iCn0="  // PUT your SESSION_ID 


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
