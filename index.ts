#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"
import Config from "./config"
import getGitCommits from "./utils/getGitCommits"
import {pullDown, pullUp} from "./utils/pullDown"
import takeScreenshot from "./utils/takeScreenshot"


interface Commits{
    author:{name:string, email:string};
    date:string;
    parent:string;
    hash:string;
}
type CommitsArray=Commits[]

const configArgs = Config();




(async ()=>{

    await Shell.exec(`git checkout 26eadfd8228fb7b3ec0d311b68f2e9d06845b2af`)

    // if(!Shell.which('git')) {
    //     Shell.echo("Run me on git idiot")
    //     Shell.exit(1)
    // }



    // const commits = await getGitCommits()

    // commits.forEach(async (commit)=>{

    //     await pullDown(commit.hash)
    //     await takeScreenshot(configArgs)
    //     await pullUp()

    // })
    
  



})()



    




