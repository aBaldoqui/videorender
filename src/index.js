const handlers = require('../handlers/index')
const readlinesync = require('readline-sync')

const inputFileName = readlinesync.question('file name: ')
//const inputFileName = 'neurocie.json'
async function index() {
    try {
        const content = await handlers.gcs.contentDownloader(inputFileName)
        const fileOutput = await handlers.contentDownloader.audioDld(content.vidUrl)
        await handlers.contentDownloader.imgDownloader(content.continuista)
        handlers.vidcreate(content, fileOutput)
    }catch(err){
        console.log(err)
    }
}
index()