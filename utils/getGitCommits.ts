import Shell from "shelljs"

export default function getGitCommits():string[]{

    const repoLog = Shell.exec('git log --pretty=tformat:"%h"')
    const arrayOfCommits = repoLog.split('\r\n').forEach(v=>console.log(v))

    return arrayOfCommits
}