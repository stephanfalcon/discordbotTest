const Discord = require("discord.js")

const bot = new Discord.Client()


bot.on("message",(message)=>{
    // console.log('message:')
    // console.log(message)
    // console.log("-----------------------------")

    messageContent(message)

})

var messageContent = (message) => {
    
    var url = ""

    message.attachments.map((res)=>{
        url = res.url
    })

    // console.log(url)

    if(url!==""){
        console.log("url:")
        console.log(url)
    }else if(message.content.search("youtu")==12){
        console.log("video:")
        console.log(message.content)
    
    }else{
        console.log('content:')
        console.log(message.content)
    }
}

bot.login("NzA0MDgxNTQ0NjgzNDU0NjA0.XqYA5Q.dcrGMvcpq6LnYNuCq8XV1T0EjOo")