const client = require('../index')
const { EmbedBuilder } = require('discord.js')
const player = require('../pleyer')

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!스킵')) {
        const ctx = message.content.split(' ')[1]

        const queue = player.getQueue(message.guild.id);
        const track = queue.tracks[Number(ctx) - 1]
        const a = queue.remove(track)
        if(a !== undefined || a !== -1)
        {
            message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("🔃 스킵 🔃")
                        .setDescription(`트렉에서 \`${track.title}\` (을)를 제거했어요!`)
                ]
            })
        }
        else
        {
            message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("스킵 실패")
                        .setDescription(`명령어를 다시한번 확인해 주세요`)
                ]
            })
        }
    }
})