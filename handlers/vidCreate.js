const ae = require('after-effects')
const path = require('path')
const { getVideoDurationInSeconds } = require('get-video-duration')
const fs = require('fs').promises

//https://ae-scripting.docsforadobe.dev/other/importoptions.html#importoptions

async function index(contentObj, audioFileName, aaaa) {
    try {
        const videoDuration = await getVideoDurationInSeconds(`./tmp/${audioFileName.filename}`)

        ae.execute((contentObj, audioFileName, videoDuration) => {
            try {


                const audioFile = `~/Documents/dev/videorender/tmp/${audioFileName.filename}`
                const imageFile = '~/Documents/dev/videorender/tmp/Shrek(personagem).jpg'



                const projectName = 'aaaa'

                const outputFolder = "~/Desktop"

                const importaOptions = new ImportOptions();
                const importiOptions = new ImportOptions();

                importiOptions.file = new File(imageFile);
                importaOptions.file = new File(audioFile);


                const comp = app.project.items.addComp(projectName, 1920, 1080, 1, videoDuration, 60);
                const audio = app.project.importFile(importaOptions);
                const img = app.project.importFile(importiOptions);


                comp.layers.add(audio);
                comp.layers.add(img);

                const rendering = app.project.renderQueue.items.add(comp);
                const outputModule = rendering.outputModule(1);

                outputModule.applyTemplate("Qualidade superior")
                outputModule.file = File(outputFolder + '/' + comp.name)

                app.project.renderQueue.queueInAME(true)
            } catch (err) {
                alert(err)
            }

        }, contentObj, audioFileName, videoDuration);
    } catch (err) {
        console.log(err)
    }


}





module.exports = index