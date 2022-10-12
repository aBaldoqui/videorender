const fs = require('fs');
const ytdl = require('ytdl-core');

const download = require('image-downloader');
const path = require('path');

let index = 0;

async function imgDownloader(arrayOfperiods) {

    return await Promise.all(arrayOfperiods.map(async (period) => {

        fs.stat(`./tmp/${period.meta}`, (err) => {
            if (!err) {
                fs.rmSync(`./tmp/${period.meta}`, { recursive: true, force: true })
                fs.mkdirSync(`./tmp/${period.meta}`, { force: true })
            } else {
                fs.mkdirSync(`./tmp/${period.meta}`, { force: true })
            }
        })

        let i = 0
        const resArr = []
        return new Promise(async (res) => {
            for (const image of period.images) {
                i++
                if (image) {
                    const options = {
                        url: image[0],
                        dest: path.resolve('tmp', period.meta, `original(${index}).png`),               // will be saved to /path/to/dest/image.jpg
                    };

                    index++
                    const downloadedImg = await download.image(options).catch(() => { console.log('foda -se') })
                    resArr.push(downloadedImg)

                    if (i === period.images.length) {
                        res({ meta: period.meta, arr: resArr })
                    }
                }

            }
        })

    }))
}

async function audioDld(url) {
    const path = './tmp/'
    try {
        const info = await ytdl.getInfo(url)
        const filename = `${info.videoDetails.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp3`
        const filepath = path + filename
        const download = ytdl(url, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(filepath));

        return new Promise((resolve) => {
            download.on("finish", () => { resolve({ filepath, filename }) })
        })

    } catch (err) {
        console.log(err)
    }
}



module.exports = { audioDld, imgDownloader }