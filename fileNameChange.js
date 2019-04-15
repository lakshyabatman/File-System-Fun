const fs= require('fs')
const path=require('path')
const pathDir=process.argv[1]

fs.readdir(pathDir,(err,files)=>{
    let newName=0
    files.map((file)=>{
        if(file.endsWith('jpeg')){
            console.log(file)
            console.log(path.join(pathDir,file))
            console.log(path.join(pathDir,newName+".jpeg"))
            newName=newName+1;
            fs.rename(path.join(pathDir,file),path.join(pathDir,newName+".jpeg"),(err)=>{
                if (err) {console.log(err)}
                newName=newName+1;
            })
        }
    })
})