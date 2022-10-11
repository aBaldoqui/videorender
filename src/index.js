const handlers = require('../handlers/index')
const readlinesync = require('readline-sync')

const inputFileName = readlinesync.question('file name: ')
//const inputFileName = 'neurocie.json'
async function index() {
    try {
        const content = await handlers.gcs.contentDownloader(inputFileName)
        console.log(content)
        handlers.state.save(content)
        const fileOutput = await handlers.contentDownloader.audioDld('https://www.youtube.com/watch?v=FqpQkqlGv_A')
        await handlers.contentDownloader.imgDownloader(content.result)
        //handlers.vidcreate()
    }catch(err){
        console.log(err)
    }
    
}
index()