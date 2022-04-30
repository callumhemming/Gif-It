import Shell from "shelljs";
import puppeteer from "puppeteer";
import getRandomString from "./getRandomString";


interface ScreenshotArgs{
    path:string;
    outputFolder:string;
    filePrefix:string;
}

export default async function takeScreenshot(
  args:ScreenshotArgs,
  commit
): Promise<any> {

  
  await Shell.exec(`git checkout ${commit.hash}`)
  



  console.log(process.cwd())
    const {path, outputFolder, filePrefix} = args

  const browser = await puppeteer.launch({
    // headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto(path);
  await page.screenshot({
    path: `../${outputFolder}/${filePrefix}${getRandomString(5)}.png`,
  });


  await Shell.exec(`git checkout main`)
  return await browser.close();
}
