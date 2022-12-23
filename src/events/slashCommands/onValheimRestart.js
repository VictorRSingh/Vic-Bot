const Client = require('ssh2').Client;
const chalk = require('chalk')

module.exports = {
  name: "onValheimRestart",
  async execute(interaction, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));

    await interaction.followUp(
      "Restarting Valheim Server, _Updates will post here_"
    );

    const conn = new Client();

    const triggers = [
      "Checking for new Valheim updates",
      "Valheim up to date!",
      "Starting server.. you will be notified when you can connect",
      "World loaded, you can now connect!",
    ];
    
    try {
        await conn.on("ready", async function () {
        //console.log("Connected to Raspberry Pi, running script");
        await conn.shell(async (err, stream) => {
          if (err) throw err;
          stream.on("data", async (data) => {
            //console.log(data.toString());
            for (const string in triggers) {
              if (data.toString().includes(triggers[string])) {
                let d = new Date();
                await interaction.editReply(
                  `[${d.toLocaleString()}]\n${triggers[string]}`
                );
              }
            }
          });
          await stream.end(
            "sudo sh /home/pi/valheim/scripts/valheim_restart.sh\nexit\n"
          );
        });
      })
      .connect({
        host: `192.168.2.87`,
        port: 22,
        username: "pi",
        password: "raspberry",
      });
    } catch (error) {
        console.error(chalk.red(`ERROR: [${error}]`));
    }
    console.log(chalk.green(`Event '${this.name}' executed successfully`))
  },
};
