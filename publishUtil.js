import fs from "fs"
import Shell from "shelljs"

function incrementVersion(){
    const readPackageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const versionArray = readPackageJSON.version.split(".")
    versionArray[2] = String(Number(versionArray[2])+1)

    return versionArray.join(".")
}


// Shell.exec(`npm version ${incrementVersion()}`)
// Shell.exec(`npm publish`)
Shell.exec("tsc")
if(fs.existsSync("./dist/Test")){Shell.exec("rm -rf ./dist/Test")}
if(fs.existsSync("./dist/GifitOutput")){Shell.exec("rm -rf ./dist/GifitOutput")}
Shell.echo(`Increment version to ${incrementVersion()}`)