#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"
import fs from "fs"

import { getRandomString } from "./utils"


if(!Shell.which('git')) {
    Shell.echo("Run me on git idiot")
    Shell.exit(1)
}



Shell.echo("Checking if output folder exists")

if(!fs.existsSync("./GifitOutput")){
    
    Shell.echo("Output folder does not exists")
    Shell.echo("Creating output folder")
    Shell.mkdir('--','GifitOutput')

}


(async()=>{
    const browser = await puppeteer.launch({
        // headless:false,
        args:['--start-maximized'],
        defaultViewport: null,

    })
    const page = await browser.newPage()
    
    await page.goto("http://localhost:3000/contact")
    await page.screenshot({path: `./GifitOutput/test${getRandomString(5)}.png`})

    await browser.close()
})()



