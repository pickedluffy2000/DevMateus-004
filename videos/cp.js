const { spawn } = require("child_process")
const ls = spawn('cmd', ['../c','dir'])

//studio
ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})
ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

ls.on('close', (code)=>{
    console.log(`processo em segundo plano finalizado com sucesso! \n code: ${code}`)
})