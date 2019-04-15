const Jimp=require('jimp')
const fs=require('fs')
const path=require('path')
const pathDir=__dirname
fs.readdir(pathDir,(err,files)=>{
    let newName=0
    files.map((file)=>{
        if(file.endsWith('jpeg')){
           Jimp.read(file)
           .then(img=>{
               img
               .resize(347,283) //Width and Height, adjust on your own :p
               .write(file)
           })
        }
    })
})
