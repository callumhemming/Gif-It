#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"

import Config from "./config"
import getRandomString from "./utils/getRandomString"
import getGitCommits from "./utils/getGitCommits"
import takeScreenshot from "./utils/takeScreenshot"


const configArgs = Config();

(async ()=>{

    if(!Shell.which('git')) {
        Shell.echo("Run me on git idiot")
        Shell.exit(1)
    }

    const commits = getGitCommits()
    commits.forEach(async ()=>{
        await takeScreenshot(configArgs)
    })



})()



    




