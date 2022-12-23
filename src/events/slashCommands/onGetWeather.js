const chalk = require('chalk');
const { Colors } = require('discord.js');
const cheerio = require('cheerio');
const axios = require('axios');

module.exports = {
    name:   'onGetWeather',
    async execute(interaction, client) {
        console.log(chalk.yellow(`Executing event '${this.name}'`));

        let locations = [
            {key: 'Toronto', value:'d8ccf908e3c4c748e232720575df7cdbca6e0f1b412bca8595d8a28d0c28e8bc'},
            {key: 'Dallas', value: '720ac4d23c846c9169c5830772bb2ac47dd44e79cb39d005a2aa2efab42c5ecd'},
            {key: 'Harlingen', value: 'be374f6c7361c54220d16dde505568a8599b3cfb93012c850cb8a92bf71b859a'},
            {key: 'College Station', value: '428c7f7653efc6e45880a0685f1b21cf12891acb1ee090407b4512bb3fb546af'},
            {key: 'Gosport', value: '0d242c28a644fbf628c899b334e455023bddd6f4eff9c475bea347e11554d60f'}
        ];

        function toFahrenheit(temperatureInC) {
            return Math.floor((temperatureInC * 9/5) + 32);
        }

        function toCelcius(temperature) {
            return Math.floor(temperature);
        }

        var temps = '';

        for(const location in locations) {
            let data = await axios.get(`https://weather.com/en-CA/weather/today/l/${locations[location].value}`)
            .then(async (res) =>{
                //console.log(res.data);
                //load Data
                const $ = await cheerio.load(res.data)
                const weather = await $('.CurrentConditions--primary--2DOqs');
                
                const temperature = await $('.CurrentConditions--tempValue--MHmYY').html().slice(0, -1);
                const condition = await $('.CurrentConditions--phraseValue--mZC_p').html();
                const feelsLike = await $('.TodayDetailsCard--feelsLikeTempValue--2icPt').html().slice(0, -1);
                if(locations[location].key === 'Toronto') {
                    temps += await (`**${locations[location].key}**: _Currently_ **${toCelcius(temperature)}°C**, **${toFahrenheit(temperature)}°F**, _Feels like_ **${toCelcius(feelsLike)}°C, ${toFahrenheit(feelsLike)}°F** : ${condition}\n`);
                } else {
                    temps += await (`**${locations[location].key}**: _Currently_ **${toFahrenheit(temperature)}°F**, **${toCelcius(temperature)}°C**, _Feels like_ **${toFahrenheit(feelsLike)}°F, ${toCelcius(feelsLike)}°C** : ${condition}\n`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }

        try {
            interaction.followUp(`As of ${new Date().toLocaleString('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: 'numeric'
            })} on ${new Date().toLocaleDateString('en-US', {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}:\n\n${temps}`);
              console.log(chalk.green(`Event '${this.name}' executed successfully`));
        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
    }
}