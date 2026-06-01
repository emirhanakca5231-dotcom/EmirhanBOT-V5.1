require("dotenv").config();

const fs=require("fs");
const mongoose=require("mongoose");

const {

Client,
Collection,
GatewayIntentBits,
Partials

}=require("discord.js");

const client=new Client({

intents:[

GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.MessageContent

],

partials:[

Partials.Channel,
Partials.Message,
Partials.User

]

});

client.commands=
new Collection();

mongoose.connect(
process.env.MONGO_URI
)

.then(()=>{

console.log(
"Mongo connected"
)

})

.catch(console.error);



const folders=
fs.readdirSync(
"./commands"
);

for(
const folder of folders
){

const files=
fs.readdirSync(
`./commands/${folder}`
).filter(
f=>f.endsWith(".js")
);

for(
const file of files
){

const command=
require(
`./commands/${folder}/${file}`
);

client.commands.set(

command.data.name,

command

);

}

}



const events=
fs.readdirSync(
"./events"
);

for(
const file of events
){

const event=
require(
`./events/${file}`
);

if(
event.once
){

client.once(

event.name,

(...args)=>

event.execute(
...args,
client
)

);

}else{

client.on(

event.name,

(...args)=>

event.execute(
...args,
client
)

);

}

}



client.login(
process.env.TOKEN
);