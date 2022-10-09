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

                const importaOptions = new ImportOptions()
                const importiOptions = new ImportOptions()

                importiOptions.file = new File(imageFile)
                importaOptions.file = new File(audioFile);


                app.project.items.addComp(projectName, 1920, 1080, 1, 24, 10);
                app.project.importFile(importaOptions)
                app.project.importFile(importiOptions)

                const audio = app.project.item(2)
                const img = app.project.item(3)

                app.project.item(1).layers.add(audio)
                app.project.item(1).layers.add(img)
                alert(app.project.item(1).layers)


            } catch (err) {
                alert(err)
            }

        });
    } catch (err) {
        console.log(err)
    }


}





module.exports = index