const core = import('@actions/core')
const github = import('@actions/github')
const exec = import('@actions/exec')

function run(){
    core.info("Hello from my custom javascript Action!")
}

run()