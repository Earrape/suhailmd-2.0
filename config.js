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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_13_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgODUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEN2YS9acVg1ajBEWXlEdnZFYnBRN1VTNk5OWWdkaHFUK3B6SXFEcE9PYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODZaUkVNNWFTdnVmdUdBd1JTVVByQVwiLFxuICBcInBob25lSWRcIjogXCJlNGYxYzRmNy0zMDZjLTQzZjUtYTExMi0xOTg0ZWRkYTY0MWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxNDUsXG4gICAgICAxNDQsXG4gICAgICA5OCxcbiAgICAgIDMyLFxuICAgICAgNjcsXG4gICAgICAxNTgsXG4gICAgICAxMjgsXG4gICAgICAxNjYsXG4gICAgICAyMixcbiAgICAgIDIzMyxcbiAgICAgIDE2OCxcbiAgICAgIDI1LFxuICAgICAgMTY1LFxuICAgICAgMjIyLFxuICAgICAgMTUxLFxuICAgICAgMjEsXG4gICAgICAzOCxcbiAgICAgIDczLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTcsXG4gICAgICAyMDksXG4gICAgICA4NCxcbiAgICAgIDE3MCxcbiAgICAgIDM2LFxuICAgICAgMTYyLFxuICAgICAgMTU3LFxuICAgICAgMTY4LFxuICAgICAgODksXG4gICAgICAxMjgsXG4gICAgICAxMzYsXG4gICAgICAzMSxcbiAgICAgIDE0MCxcbiAgICAgIDE5MSxcbiAgICAgIDE0NixcbiAgICAgIDExLFxuICAgICAgMjU0LFxuICAgICAgMTE4LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk45SEgzQ0JCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNjU4MjE0ODExODo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzE4NzY4ODE3MTkzNDQ6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW4xdk80QkVPVzkrYmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwRmNZbWQ2a2tsdnVnSUhReUJOYUE5SnZ5bTRJd3pTbUMxSmF5WVNzOHkwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNtTHhIZUxsam1hdlM2TnRiMmVabGZrN0o4ZFBMOGVZQUZEc3lobXdnMVRYcW1UdW1pZGNubDE2OEpaNHBQc2YvakV0dzY0MGJ0dUxkVVJCbzNzcURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZKWWxhcEk1UXY0Tlk3dUhldEZGcHdJWlpBNXNoTEdhQ3RNejR0Q2tsSTZ5eSsrUTVYZnVzY0ZxM1NrMS9BS3cvZHhKbmxBRlBibHlPVjJmWFYyTWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE2NTgyMTQ4MTE4OjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjE0MDc3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBrTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGtMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnN0NVVzRlVNU2tYZVV1T2x2VVZnbDhmWW4rQ3YyOEtTZlptL2xwUFhJTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDAxMjAyNjUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzMyMTQwNzEzODUwXCJ9Igp9"  // PUT your SESSION_ID 


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
