const chalk = require("chalk");
const MongoClient = require("mongodb").MongoClient;

module.exports = {
  name: "onIncreaseGeneratedCount",
  async execute(interaction, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));
    var found = null;
    var collection = 'AiGenerated';
    
    try {
        MongoClient.connect(
            process.env.databaseToken,
            function (error, db) {
                if (error) console.error(chalk.red(`ERROR: [${error}]`));
                db.close();
            }
          )


      
        MongoClient.connect(process.env.databaseToken, function (error, db) {
        var dbo = db.db(process.env.db)

        dbo.collection(collection).findOne({}, 
            function(err, result) {
            if(err) console.error(err);
            
            found = result;

            if(found === null) {
                dbo.collection(collection).insertOne({
                    _id: interaction.user.id,
                    name: interaction.user.username,
                    count: 1
                }, function(err, res) {
                    if(err) console.error(err);
                    console.log("1 document inserted\n");
                });
            } else {
                var query = {_id: interaction.user.id};
                var newValues = {$set: {count: found.count+1}}
                dbo.collection(collection).updateOne(query, newValues, function(err, res) {
                    if(err) console.error(err);
                    console.log(`updated ${found.name} count to ${newValues['$set'].count}`);
                })
            }

        });
      });

    } catch (error) {
      console.error(chalk.red(`ERROR: [${error}]`));
    }

    console.log(chalk.green(`Event '${this.name}' executed successfully`));
  },
};
