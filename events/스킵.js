const client = require('../index')
const { EmbedBuilder } = require('discord.js')
const player = require('../pleyer')

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!μ€ν΅')) {
        const ctx = message.content.split(' ')[1]

        const queue = player.getQueue(message.guild.id);
        const track = queue.tracks[Number(ctx) - 1]
        const a = queue.remove(track)
        if(a !== undefined || a !== -1)
        {
            message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("π μ€ν΅ π")
                        .setDescription(`νΈλ μμ \`${track.title}\` (μ)λ₯Ό μ κ±°νμ΄μ!`)
                ]
            })
        }
        else
        {
            message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("μ€ν΅ μ€ν¨")
                        .setDescription(`λͺλ Ήμ΄λ₯Ό λ€μνλ² νμΈν΄ μ£ΌμΈμ`)
                ]
            })
        }
    }
})