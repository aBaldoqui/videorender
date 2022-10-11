const ae = require('after-effects')
const path = require('path')
//https://ae-scripting.docsforadobe.dev/other/importoptions.html#importoptions
//err


async function index() {
    try {
        ae.execute(() => {
            try {
                const audioFile = '~/Documents/dev/videorender/tmp/neurocientista_sobre_o_vicio_em_p0rn0gr4f1a__eslen_delanogare____cortes_podcast.mp3'
                const imageFile = '~/Documents/dev/videorender/tmp/Shrek(personagem).jpg'
                const projectName = 'aaaa'

                const outputFolder = "~/Desktop"

                const importaOptions = new ImportOptions();
                const importiOptions = new ImportOptions();

                importiOptions.file = new File(imageFile);
                importaOptions.file = new File(audioFile);


                const comp = app.project.items.addComp(projectName, 1920, 1080, 1, 24, 60);
                const audio = app.project.importFile(importaOptions);
                const img = app.project.importFile(importiOptions);
                

                comp.layers.add(audio);
                comp.layers.add(img);
                alert(app.project.item(1).layers);

                const rendering = app.project.renderQueue.items.add(comp);
                const outputModule = rendering.outputModule(1);

                outputModule.applyTemplate("Qualidade superior")
                outputModule.file = File(outputFolder +'/' + comp.name)

                app.project.renderQueue.queueInAME(true)
            } catch (err) {
                alert(err)
            }

        });
    } catch (err) {
        console.log(err)
    }


}





module.exports = index