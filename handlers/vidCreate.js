const ae = require('after-effects')

//https://ae-scripting.docsforadobe.dev/other/importoptions.html#importoptions
//err
const importOptions = new ImportOptions();
importOptions.file = new File('C:\Users\arthu\Documents\dev\videorender\tmp\neurocientista_sobre_o_vicio_em_p0rn0gr4f1a__eslen_delanogare____cortes_podcast.mp3');

async function index() {

    const create_composition = new ae.Command(name => {
        name = typeof name === "string" ? name : "New Comp";
        app.project.items.addComp(name, 1920, 1080, 1, 24, 10);
    });

    const importAudiofile = ae.Command(importOptions => {
        app.project.importFile(importOptions)
    })

    ae(create_composition, "First Comp");
    ae(importAudiofile, importOptions)
    
    
}


module.exports = index