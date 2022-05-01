#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"
import Config from "./config"
import getGitCommits from "./utils/getGitCommits"
import {pullDown, pullUp} from "./utils/pullDown"
import takeScreenshot from "./utils/takeScreenshot"
import inquirer from "inquirer"
import fs from "fs"
import {exec} from "child_process"

import getRandomString from "./utils/getRandomString"
interface Commit{
    author:{name:string, email:string};
    date:string;
    parent:string;
    hash:string;
}
type CommitsArray=Commit[]

const configArgs = Config();


// const stages = [
//     [],
//     [],
//     []
// ];

(async ()=>{



    if(!Shell.which('git')) {
        Shell.echo("Run me on git idiot")
        Shell.exit(1)
    }


    await Shell.mkdir("./Test")

    
    
    const repoEscaped = await Shell.exec("git config --get remote.origin.url")
    const repo = repoEscaped.slice(0,repoEscaped.length-1) // Remove escape characters


    
    process.chdir("./Test")
    await Shell.exec(`git clone ${repo} .`)


  

    // process.chdir(`${process.cwd()}\\${folder}`)
    // console.log("Current directory: ",process.cwd())
    await Shell.exec("npm i")

    if(!fs.existsSync("../GifitOutput")){Shell.exec("mkdir ./GifitOutput")}

    

    const commits = await getGitCommits()
    /////////////////////////////////////////////////////

    // commits.forEach( (commit:Commit, index:number)=>{

    //     console.log("loop through commits ",index)
    //     takeScreenshot(configArgs, commit)

    // })
    

    let startServer = exec("npm run dev")

    let {path, outputFolder, filePrefix} = configArgs
    for(let i=1; i < commits.length; i++){
        
            await Shell.exec(`git checkout ${commits[i].hash}`)
            try{

                let browser = await puppeteer.launch({
                args: ["--start-maximized"],
                defaultViewport: null,
                })
                let page = await browser.newPage();
                await page.goto(path);
                setTimeout(() => {
                    console.log("Delayed for 300 ms");
                }, 600)
                await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
                await page.screenshot({
                    path: `../${outputFolder}/${filePrefix}${String(i)}.png`,
                })
                await Shell.exec(`git checkout main`)
                await browser.close();
            }catch(err){
                continue
            }
        }
        
        startServer.kill()
        process.chdir("..")
        await Shell.exec("rm -rf ./Test")
        Shell.exit(1)
    
})()



    




