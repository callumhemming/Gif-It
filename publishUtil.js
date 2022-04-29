import fs from "fs"
import Shell from "shelljs"

function incrementVersion(){
    const readPackageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const versionArray = readPackageJSON.version.split(".")
    versionArray[2] = String(Number(versionArray[2])+1)

    return versionArray.join(".")
}


Shell.exec(`npm version ${incrementVersion()}`)
Shell.exec(`npm publish`)


