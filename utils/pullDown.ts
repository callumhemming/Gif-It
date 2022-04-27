import Shell from "shelljs"

export default async function pullDown(hash:string){
    console.log(`git checkout ${hash};
    git pull;
    npm i;`)
    // Shell.exec(`git checkout ${hash};
    // git pull;
    // npm i;
    // `)
}