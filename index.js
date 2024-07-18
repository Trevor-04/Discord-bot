require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.MessageContent, 
    ]
});

client.on('ready', () => {
    console.log('✅${c.user.log} is online');
});

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'hey'){
        interaction.reply('hey');
    }
    if(interaction.commandName === 'ping'){
        interaction.reply('Frog!');
    }
    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        interaction.reply("The sum is: " +(num1 + num2));
    }
    if(interaction.commandName === 'embed'){
        const embed = new EmbedBuilder()
        .setTitle("Embed title")
        .setDescription("This is an embed decription")
        .setColor("Random")
        .addFields({name: "Field title", value: "Some random value", inline: true})
        interaction.reply({embeds: [embed]});
    }
});

client.on('messageCreate', (message) =>{
    if(message.author.bot){
        return;
    }
    if(message.content === 'hello'){
        message.reply('hola!');
    }
});

client.on('messageCreate', (message) =>{
    if(message.content === 'embed'){
        const embed = new EmbedBuilder()
        .setTitle("Embed title")
        .setDescription("This is an embed decription")
        .setColor("Random")
        .addFields({name: "Field title", value: "Some random value", inline: true})
        message.channel.send({embeds: [embed]})
    }
})

client.login(process.env.TOKEN);

