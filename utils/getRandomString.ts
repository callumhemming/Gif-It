import Config from "../config";
import Shell from "shelljs"

const {outputFolder, filePrefix} = Config()

/**
 * Returns a random string of numerial characters.
 * The length of the string is based on param1: len:number
 *@param len Length of random string
 *@returns String of random characters
 */
export default function getRandomString(len: number): string {

  function getRandomNumber(): string {
    return String(Math.floor(Math.random() * 9));
  }
  const randomCharList = Array(len)
  .fill("")
  .map(v => getRandomNumber());
  return randomCharList.join("");

  
}

// function getPreviousNumbers():string[]{
//   const arrayOfFiles = JSON.parse(Shell.exec(`ls ${outputFolder}`)).split('\r\n')
  
//   console.log(arrayOfFiles)

//   return [""]
// }
