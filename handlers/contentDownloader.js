const fs = require('fs');
const ytdl = require('ytdl-core');

async function audioDld(url) { 
    const path = './tmp/'
    try {
        const info = await ytdl.getInfo(url)
        const filename = `${info.videoDetails.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp3`
        const filepath = path+filename
        const download = ytdl(url, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(filepath));

        return new Promise((resolve) => {
            download.on("finish", () => { resolve({filepath, filename}) })
        })

    } catch (err) {
        console.log(err)
    }
}



module.exports = { audioDld }