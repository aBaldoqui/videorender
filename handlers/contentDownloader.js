const fs = require('fs');
const ytdl = require('ytdl-core');

const download = require('image-downloader');
const path = require('path');

async function imgDownloader(arrayOfperiods) {

    return new Promise(res => {
        let index = 0
        arrayOfperiods.forEach(period => {
            try {

                // fs.rmSync(`./tmp/${period.meta}`, { recursive: true, force: true })
                //fs.mkdirSync(`./tmp/${period.meta}`, { force: true })

                Promise.all(period.images.map(url => {
                    if (!url) return null
                    // console.log(url[0])
                    const options = {
                        url: url[0],
                        dest: path.normalize(path.resolve('tmp', period.meta, `${index}.png`)),
                    };
                    index++

                    return new Promise(res => {
                        download.image(options)
                            .then(({ filename }) => {
                                res(filename) // saved to /path/to/dest/image.jpg
                            })
                            .catch((err) => console.log('normal log'));
                    })

                })).then(imageArr => {
                    console.log(imageArr)

                })



            } catch (err) {
                console.log(err)
            }
        })
    })






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