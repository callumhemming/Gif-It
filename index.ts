#!/usr/bin/env node
import Shell from "shelljs"
import  puppeteer  from "puppeteer"
import fs from "fs"
import Config from "./config"

import { getRandomString } from "./utils"


const {path, filePrefix, outputFolder} = Config()



if(!Shell.which('git')) {
    Shell.echo("Run me on git idiot")
    Shell.exit(1)
}

(async()=>{
    const browser = await puppeteer.launch({
        headless:false,
        args:['--start-maximized'],
        defaultViewport: null,

    })
    const page = await browser.newPage()
    
    await page.goto(path)
    await page.screenshot({path: `${outputFolder}/${filePrefix}${getRandomString(5)}.png`})

    await browser.close()
})()



