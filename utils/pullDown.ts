import Shell from "shelljs"

export  async function pullDown(hash:string){
    console.log("Pulling down ",hash, process.cwd())
  return await Shell.exec(`
        git checkout ${hash}
        `)
    
}

export async function pullUp(){
    return await Shell.exec(`
    git checkout main
    `)
}