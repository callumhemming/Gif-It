import Shell from "shelljs"

export default async function pullDown(hash:string){
    
    Shell.exec(`git checkout ${hash};
    git pull;
    npm i;
    `)
}