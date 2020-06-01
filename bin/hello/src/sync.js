const seq=require('./seq')

require('./model')



seq.authenticate().then(() =>{
     console.log("hello world");
     
}).catch(()=>{
     console.log("nidaye");
     
})

seq.sync({ force : true}).then( () =>{
        
       console.log(" sync  ok ");
        
       process.exit()
})