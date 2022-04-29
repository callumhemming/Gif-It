#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"
import Config from "./config"
import getGitCommits from "./utils/getGitCommits"
import {pullDown, pullUp} from "./utils/pullDown"
import takeScreenshot from "./utils/takeScreenshot"


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
    await Shell.exec("npm run dev")

    const commits = await getGitCommits()

    commits.forEach(async (commit:Commit)=>{

        await pullDown(commit.hash)
        await takeScreenshot(configArgs)
        await pullUp()

    })
    



    // console.log(repo.slice(0,repo.length-1))


    
  



})()



    




