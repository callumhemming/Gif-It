import Shell from "shelljs";
import puppeteer from "puppeteer";
import getRandomString from "./getRandomString";
import {exec} from "child_process"

interface ScreenshotArgs{
    path:string;
    outputFolder:string;
    filePrefix:string;
}

export default async function takeScreenshot(
  args:ScreenshotArgs,
  commit
): Promise<any> {


  const startServer = exec("npm run dev")
  
  
  await Shell.exec(`git checkout ${commit.hash}`)
  



  
  const {path, outputFolder, filePrefix} = args

  const browser = await puppeteer.launch({
    // headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  })
  const page = await browser.newPage();

  await page.goto(path);
  setTimeout(() => {
    console.log("Delayed for 300 ms");
  }, 300)

  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
  await page.screenshot({
    path: `../${outputFolder}/${filePrefix}${getRandomString(5)}.png`,
  })


  startServer.kill()
  await Shell.exec(`git checkout main`)
  return await browser.close();
}



// const {exec} = require("child_process")


// // const fs = require("fs")
// const Shell = require("shelljs")


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