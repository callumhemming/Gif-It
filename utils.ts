/**
 * Returns a random string of numerial characters.
 * The length of the string is based on param1: len:number
*@param len Length of random string
*@returns String of random characters
*/
export function getRandomString(len: number): string {
  function getRandomNumber(): string {
    return String(Math.floor(Math.random() * 9));
  }
  const randomCharList = Array(len)
    .fill("")
    .map(v => getRandomNumber());
  return randomCharList.join("");
}
