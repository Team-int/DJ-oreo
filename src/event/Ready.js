module.exports = async (client) => {
  client.on('ready', async () => {
    console.log(client.color('cyan', '[Bot]'), `Logged on ${client.user.username}`)
    setInterval(() => {
      switch (Math.floor(Math.random() * 4)) {
      case 0:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: `${client.guilds.cache.size}개의 서버에서 활동중`,
            type: 'PLAYING',
          },
        })
        break
      case 1:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      case 2:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      case 3:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      case 4:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      }
    }, 10000)
  })
    setTimeout(async () => {
      client.status = '정상 운영중...'
    }, 1000)
}