require('dotenv').config();
const {Routes, REST, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'embed',
        description: 'Sends an embed!',
    },
    {
        name: 'hey',
        description: 'Replies with hey',

        name: 'ping',
        description: 'Replies with Frog!',

        name: 'add', 
        description: 'Adds two numbers',
        options:[
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1,
                    },
                    {
                        name: 'two',
                        value: 2,
                    },
                    {
                        name: 'three',
                        value: 3,
                    },
                ],
                required: true,
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
        //name: 'embed',
        //description: 'Adds two numbers',
        
    },
    
    {
        name: 'hey',
        description: 'Replies with hey',
    },
    {
        name: 'ping',
        description: 'Replies with Frog!',
    },
    
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        )
        console.log('Registering slash commands....')
    } catch (error) {
        console.log('There was an error: ${error}');
    }
})();