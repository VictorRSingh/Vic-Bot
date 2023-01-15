const fs = require('fs');
const { connection } = require('mongoose');
const chalk = require('chalk');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolder = fs.readdirSync(`./src/events`);
        for(const folder of eventFolder) {
            const eventFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter(file => file.endsWith(".js"));
            
    switch(folder) {
        case "client":
            for(const file of eventFiles)
            {
                const event = require(`../../events/${folder}/${file}`);
                if(event.once) 
                client.once(event.name, (...args) => { 
                    event.execute(...args, client)
                }
                );

                else
                client.on(event.name, (...args) => {           
                    try {                
                        event.execute(...args, client)
                    } catch (error) {
                        console.error(chalk.red(`ERROR: [${error}]`));
                    }
                });
            }
            break;

        case "mongo":
                for(const file of eventFiles) 
                {
                    const event = require(`../../events/${folder}/${file}`);
                    if(event.once) 
                    connection.once(event.name, (...args) => 
                    event.execute(...args, client)
                    );
                    else 
                    connection.on(event.name, (...args) => 
                    event.execute(...args, client)
                    );
                }
                break;
        case "slashCommands":
            for(const file of eventFiles) 
            {
                const event = require(`../../events/${folder}/${file}`);
                if(event.once) 
                connection.once(event.name, (...args) => 
                event.execute(...args, client)
                );
                else 
                client.on(event.name, (...args) => {                
   
                try {
                        console.log(chalk.yellow(`Executing event '${event.name}'`));                     
                        event.execute(...args, client)
                } catch (error) {
                    console.error(chalk.red(`ERROR: [${error}]`));
                }

                console.log(chalk.green(`Event '${event.name}' executed successfully`));
            });
            }
            break;
        default:
            break;
        }
        }
    }
}