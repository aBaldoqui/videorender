const ae = require('after-effects')
const path = require('path')
//https://ae-scripting.docsforadobe.dev/other/importoptions.html#importoptions
//err


async function index() {
    const create_composition = new ae.Command(name => {
        name = typeof name === "string" ? name : "New Comp";
        app.project.items.addComp(name, 1920, 1080, 1, 24, 10);
    });


    let audioFile = path.resolve('..', 'tmp', 'neurocientista_sobre_o_vicio_em_p0rn0gr4f1a__eslen_delanogare____cortes_podcast.mp3').replace('C:','')

    //audioFile = `\\${audioFile}`     

    try {
        ae.execute((audioFile_fromnode) => {
            const importOptions = new ImportOptions()
            importOptions.file = new File('~/Documents/dev/videorender/tmp/neurocientista_sobre_o_vicio_em_p0rn0gr4f1a__eslen_delanogare____cortes_podcast.mp3');
            app.project.importFile(importOptions)
        }, audioFile);
    } catch (err) {
        console.log(err)
    }



    // const importAudiofile = new ae.Command(audioFile => {
    //     const importOptions = new ImportOptions()
    //     importOptions.file = new File(audioFile);
    //     app.project.importFile(importOptions)
    // })

    // //ae(create_composition, "First Comp");
    // ae(importAudiofile, audioFile)


}


module.exports = index