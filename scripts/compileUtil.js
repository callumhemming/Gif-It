const Shell = require("shelljs")
const fs = require("fs")






function incrementVersion(){
    const readPackageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const versionArray = readPackageJSON.version.split(".")
    versionArray[2] = String(Number(versionArray[2])+1)
    
    return versionArray.join(".")
}

Shell.exec("tsc")
if(fs.existsSync("./dist/Test")){Shell.exec("rm -rf ./dist/Test")}
if(fs.existsSync("./dist/GifitOutput")){Shell.exec("rm -rf ./dist/GifitOutput")}
if(fs.existsSync("../GifitTestSite/Test")){Shell.exec("rm -rf ../GifitTestSite/Test")}
if(fs.existsSync("../GifitTestSite/GifitOutput")){Shell.exec("rm -rf ../GifitTestSite/GifitOutput")}
Shell.exec('git commit -am "Clearing changes..."')
Shell.exec(`npm version ${incrementVersion()}`)
Shell.exec("npm pack -pack-destination ../GifitTestSite/bins")

// const {exec} = require("child_process")


// process.chdir("../GifitTestSite/Test")
// let startServer = exec(`npm run dev`)
// Shell.exec("echo hello")
// startServer.kill()
// startServer = exec(`npm run dev`)
// Shell.exec("git checkout 0805d222c06cf4a4dab9646a8ca4d75b6cb38639")
// startServer.kill()
// Shell.exec("git checkout main")
// startServer = exec(`npm run dev`)
// startServer.kill()

// startServer.kill()