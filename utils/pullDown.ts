import Shell from "shelljs"

export  async function pullDown(hash:string){
    let tryToPull;
    try{
       tryToPull = await Shell.exec(`
        git checkout ${hash};
        git pull;
        npm i;
        `)
    }catch(err){
        tryToPull === err
        Shell.echo("Gifit Failed: Please ensure all changes are commited before running this package")
        Shell.exit(1)
    }
  
}

export async function pullUp(){
    return await Shell.exec(`
    git checkout main
    `)
}