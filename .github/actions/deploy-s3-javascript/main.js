const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run(){
    core.notice("Hello from my custom javascript Action!")

    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})

    //upload s3
    const s3Uri = `s3://${bucket}`
    core.exec(`aws s3 sync ${distFolder} ${s3Uri}  --region ${bucketRegion}`)

}

run()