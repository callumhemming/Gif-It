import Shell from "shelljs"

export  async function pullDown(hash:string){
    
    Shell.exec(`
    git fetch
    git checkout ${hash};
    git pull;
    npm i;
    `)
}

export async function pullUp(){
    Shell.exec(`
    git checkout main
    `)
}