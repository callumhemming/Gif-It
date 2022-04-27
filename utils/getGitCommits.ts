import Shell from "shelljs"

export default async function getGitCommits():Promise<string[]>{

    const repoLog = await Shell.exec('git log --pretty=tformat:"%h"')
    const arrayOfCommits = repoLog.split('\r\n')

    return arrayOfCommits
}