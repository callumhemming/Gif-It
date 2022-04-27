import Shell from "shelljs"
import fs from "fs"


const gitCommand = `git log -1 --pretty=format:'----- DEPLOYMENT REPO INFO -----%n{%n  "commit": "%H",%n  "author":     "%an",%n  "author_email": "%ae",%n  "date": "%ad",%n  "message": "%f"%n}'
`


export default function getGitCommits():string[]{

    const repoLog = Shell.exec('git log --pretty=format:"%h"')

    repoLog.split(/\r?\n/).forEach(v=>console.log(v))

    return []
}

getGitCommits()