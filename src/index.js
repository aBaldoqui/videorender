const handlers = require('../handlers/index')
const readlinesync = require('readline-sync')

const inputFileName = readlinesync.question('file name: ')
//const inputFileName = 'neurocie.json'
async function index() {
    try {
        const content = await handlers.gcs.contentDownloader(inputFileName)
        const fileOutput = await handlers.contentDownloader.audioDld(content.vidUrl)
        const test = await handlers.contentDownloader.imgDownloader(content.continuista)//.then(res => handlers.vidcreate(content, fileOutput, res))        
        console.log('bora?')
        console.log(test)
    }catch(err){
        console.log(err)
    }
}
index()