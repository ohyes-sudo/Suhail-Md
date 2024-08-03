const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_23_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBTnNzVUtzaVJwYlZqRE5wRWFBbGhSSkQ4YWdJZEQ0eGF5bnE1QUJvYXNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyMTY2NTAzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkJFMzRCQTc1RDJDQzk4MDJBNkE0REZFQjkyNTg0MTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjc3MDI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIxNjY1MDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OTBEQjYyOTA4NENBODBCRUU4MzQxQUI5MTNGRUU1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NzcwMjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGROdW5RV0lTRXVlLThKNzE0ejJSQVwiLFxuICBcInBob25lSWRcIjogXCJlMzdhNjg0Mi0zZjFmLTQ5ZTktOTcxYS1iNTBlMWE1Mjc5YTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMzIsXG4gICAgICA2NyxcbiAgICAgIDIwMSxcbiAgICAgIDYzLFxuICAgICAgMjE4LFxuICAgICAgMTM5LFxuICAgICAgMzgsXG4gICAgICA2MSxcbiAgICAgIDE0LFxuICAgICAgMjEsXG4gICAgICAxOTEsXG4gICAgICAxNDEsXG4gICAgICAyNTIsXG4gICAgICAyOCxcbiAgICAgIDIzNSxcbiAgICAgIDE3NixcbiAgICAgIDE5NixcbiAgICAgIDIzMyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjAyLFxuICAgICAgMTkzLFxuICAgICAgMjcsXG4gICAgICAxMjgsXG4gICAgICA4MCxcbiAgICAgIDI1NCxcbiAgICAgIDY5LFxuICAgICAgMjE0LFxuICAgICAgMjQ1LFxuICAgICAgMzAsXG4gICAgICAyMTUsXG4gICAgICAyMyxcbiAgICAgIDExNCxcbiAgICAgIDMwLFxuICAgICAgOTEsXG4gICAgICAyMDEsXG4gICAgICAyNDcsXG4gICAgICAyMjAsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNVhNQzZGUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzIxNjY1MDMzOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzUxNjE3MTgzOTA4NTA6NDNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pynIPCdlYbwnZWZIPCdlaog8J2VliDwnZWkIMKg8J+OriDinKdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObTl0ZWNGRUozdXQ3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdOU05sbE1CM28rN2tRUmhiMkV1TFphNDhwdGY2ZFczVkRPZVc2cmV3UTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnNmdjZUNUMyUXgyaXBzYmJJUHZQZHBLYWcwSWtqV0I1d25VRjJ6S3FlZmFoLzhYZjd3cnh2NzFJR1hHSmxiMWQzUEEyZzJ2Sk1vV0x6cHhLWUFGQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1VQMWQ2dE1wby90V0FlZlpQTlNBTDc0UjRQTHRRWE1GNkQ5S1o5THNzMys1Q0RZS1FaZUJFN3ZlY0JqMHJKUE5PYlRtN3BNVGNRU0htSzBtTnh6aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzIxNjY1MDMzOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjc3MDI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGE3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQYTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5TWtrZStIam9hdjhBdlhXMENBcys5YTg0ekNSTnhCeG5MOVRwZnExRHdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTkwNjAxODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjY3NzAyODQ4NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Manuu",
  packname: process.env.PACK_NAME || "ohyes",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "OHYES",


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
