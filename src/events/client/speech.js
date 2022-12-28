module.exports = {
    name: 'speech',
    async execute(message, client) {
        if(!message.content) return;

        if(message.content === "Hey Vic Bot") {
            console.log("Hello from Vic Bot");
        }
        console.log(message.content);
    }
}