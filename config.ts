import fs from "fs"
import Shell from "shelljs"

const configFileName = "./gifitconfig.json"


interface ConfigFile{
    path:string;
    filePrefix:string;
    outputFolder:string;

}



/**
 * 
 * 
 * 
 * @returns path, filePrefix, outputFolder
 * 
 * 
 */
export default function Config(): ConfigFile{
const configJson = fs.existsSync(configFileName)?
    JSON.parse(Shell.cat(configFileName)) : 
    null

    if(!configJson?.outputFolder){
        if(!fs.existsSync("./GifitOutput")){
            Shell.mkdir("./GifitOutput")
        }
    }else{
        if(!fs.existsSync(`./${configJson.outputFolder}`)){

            Shell.mkdir(`./${configJson.outputFolder}`)
        }
    }

    return({
      path: configJson?.path ?? "http://localhost:3000/",
      filePrefix: configJson?.filePrefix ?? "picture",
      outputFolder: configJson?.outputFolder ?? "./GifitOutput"
    })
}