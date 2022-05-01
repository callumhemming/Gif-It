import Shell from "shelljs"
import {commits} from "git-log-nodejs"

interface Commits{
    author:{name:string, email:string};
    name:string;
    email:string;
}
type CommitsArray=Commits[]

export default async function getGitCommits():Promise<any>{
    Shell.echo("Getting commits")
    const commitsArray = await commits()
    // const commitsRev = commitsArray.reverse()
    return [...commitsArray.slice(0,5)]

}