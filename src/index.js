const handlers = require('../handlers/index')
const readlinesync = require('readline-sync')

// const inputFileName = readlinesync.question('file name: ')
const inputFileName = 'neurocie.json'
async function index() {
    try {
        //const res = await handlers.gcs.contentDownloader(inputFileName)
        // handlers.state.save(res)
        //const fileOutput = await handlers.contentDownloader.audioDld('https://www.youtube.com/watch?v=p0K18U6GIC8')
        handlers.vidcreate()
    }catch(err){
        console.log(err)
    }
    
}
index()