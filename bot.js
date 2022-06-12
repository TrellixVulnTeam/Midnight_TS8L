const { Client } = require("discord.js-selfbot-v13");
const { evaluate } = require("mathjs")
const { red, green, yellow, blue, magenta, cyan, white, grey } = require('kleur/colors')
const config = require('./config.json')
let prefix = config.prefix
const version = '1.3'
const name = 'Midnight'
let latestCommand;

let purgeHackText = '‎'

for(let i = 0; i < 200; i++) {
    purgeHackText += '  \n'
}
purgeHackText += '‎'

if(config.token == 'YOURTOKEN') {
    exit('Please set your token, then relaunch the .bat file.')
}
const client = new Client()

const asciiArt = `
    ███╗   ███╗██╗██████╗ ███╗   ██╗██╗ ██████╗ ██╗  ██╗████████╗
    ████╗ ████║██║██╔══██╗████╗  ██║██║██╔════╝ ██║  ██║╚══██╔══╝
    ██╔████╔██║██║██║  ██║██╔██╗ ██║██║██║  ███╗███████║   ██║   
    ██║╚██╔╝██║██║██║  ██║██║╚██╗██║██║██║   ██║██╔══██║   ██║   
    ██║ ╚═╝ ██║██║██████╔╝██║ ╚████║██║╚██████╔╝██║  ██║   ██║   
    ╚═╝     ╚═╝╚═╝╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   `
console.log('')
console.log(cyan(asciiArt))
console.log('')
client.on('ready', async () => {
    console.log(`${green('Connected')}\nLogged in as: ${client.user.tag} [${yellow(`${client.guilds.cache.size} Servers`)}]`)
    console.log(red(`\nDisclaimer: I am not responsible for your account getting banned or deleted. You are responsible for what happens to\nyour account.`))
    console.log(cyan(`\n${prefix}help to get started.`))
})

client.on('message', async (msg) => {
    if(!msg.content.startsWith(prefix)) return
    if(msg.author !== client.user) return

    let args = msg.content.slice(prefix.length).trim().split(' ')
    let command = args.shift().toLowerCase()

    if(command != 'repeat') {
        latestCommand = msg.content
    }

    if(command == 'help') {
        msg.channel.send(`\`\`\`ini\n
[${name} v${version}] -- [Prefix: ${prefix}]\n
[credits] Shows the credits for ${name}
[info] Shows info about the bot\n
[fun] Lists fun commands
[utility] Lists utility commands
[abusive] Lists abusive commands
\`\`\``)
    } else if(command == 'eval' || command == 'calc' || command == 'calculate') {
        strArgs = args.join('')
        evaledStr = String(evaluate(strArgs))
        msg.channel.send('```\n'+evaledStr+'\n```')
    } else if(command == 'credits') {
        msg.channel.send('```ini\n[Ozzy] Made the bot\n```')
    } else if(command == 'lightmode') {
        client.setting.setTheme('light')
    } else if(command == 'darkmode') {
        client.setting.setTheme('dark')
    } else if(command == 'colors') {
        msg.channel.send('```ini\n[Yellow] fix\n[Orange] arm\n[Cyan] yaml\n[# Blue] md\n[Grey]\n[- Red] diff\n[+ Yellowish Green] diff\n```')
    } else if(command == 'embedmsg') {
        mes = args.join('+')
        msg.channel.send(` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|https://embed.rauf.workers.dev/?author=${mes}&color=317DC2`)
        msg.delete()
    } else if(command == 'gfgen') {
        msg.channel.send('https://github.com/OzzyAndShadow/GFGenerator')
    } else if(command == 'setlayout') {
        if(args[0].toLowerCase() == 'compact') {
            client.setting.setDisplayCompactMode(true)
        } else if(args[0].toLowerCase() == 'normal') {
            client.setting.setDisplayCompactMode(false)
        }
    } else if(command == 'setstatus') {
        let sta = args.shift()
        let emoj = args.shift()
        client.setting.setCustomStatus({
            status: sta,
            emoji: emoj,
            text: args.join(' '),
            expires: null
        })
    } else if(command == 'info') {
        msg.channel.send('```ini\n['+name+'] Self Bot [v'+version+']\n```')
    } else if(command == 'purgehack') {
        msg.delete()
        msg.channel.send(purgeHackText)
    } else if(command == 'fun') {
        msg.channel.send(`\`\`\`ini
[embedmsg <message>] Sends an embed message generated by embed.rauf.wtf
[gfgen] Links the github repository for 'GFGenerator' by Ozzy
[aboutme] Gives you some info about yourself
\`\`\``)
    } else if(command == 'utility') {
        msg.channel.send(`\`\`\`ini
[eval/calc/calculate <expression>] Calculate expression
[darkmode] Dark mode
[lightmode] Pain/Light mode
[colors] Lists (most) colors in discord
[setlayout <compact|normal>] Sets your discord layout
[setstatus <online|idle|dnd|invisible> <{emoji}|null> <status/bio>] Set your status
[repeat] Repeats the last command you did (excluding -repeat obviously)
[prefix] Sets your ${name} prefix.
\`\`\``)
    } else if(command == 'abusive') {
        msg.channel.send(`\`\`\`ini
[purgehack] Practically purges messages.
\`\`\``)
    } else if(command == 'repeat') {
        msg.delete()
        msg.channel.send(latestCommand)
    } else if(command == 'aboutme') {
        msg.channel.send(`\`\`\`ini
[Tag] ${msg.author.tag}
[Id] ${msg.author.id}
[Join Date] ${String(msg.author.createdAt).split(' ').slice(0,4).join(' ')}
[Servers] In ${client.guilds.cache.size} servers
\`\`\``)
    } else if(command == 'prefix') {
        p = args[0]
        newjson = {
            "token": config.token,
            "prefix": p
        }
        require('fs').writeFile('config.json', JSON.stringify(newjson), (error) => {
            if (error) {
                throw error;
            }
        });
        prefix = p
        msg.channel.send(`\`\`\`ini
[Prefix] set to [${prefix}]
\`\`\``)
    }
})

client.login(config.token)

function exit( status ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // +      input by: Paul
    // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
    // +   improved by: Philip Peterson
    // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
    // %        note 1: Should be considered expirimental. Please comment on this function.
    // *     example 1: exit();
    // *     returns 1: null

    var i;

    if (typeof status === 'string') {
        console.log(red(status));
    }

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }

    throw new Error();
}