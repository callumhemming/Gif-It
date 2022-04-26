#!/usr/bin/env node
import Shell from "shelljs"

interface Dog{
    name:string;
}

console.log("hello")



if(!Shell.which('git')) {
    Shell.echo("Run me on git idiot")
    Shell.exit(1)
}


Shell.echo("Works!")