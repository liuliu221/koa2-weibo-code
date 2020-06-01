 const Sequelize = require("sequelize")


 const conf ={
        host:"localhost",
        dialect:"mysql"
 }


 const seq =new Sequelize("weibo","root","123",conf)

//  seq.authenticate().then( () =>{
//         console.log("hello world");
        
//  }).catch(() =>{
//         console.log("hello world");
        
//  })


 module.exports = seq





// const Sequelize = require("sequelize")


// const conf = {
//       host:"localhost",
//       dialect : "mysql"
// }


// const seq = new Sequelize("test","root","123",conf)


// seq.authenticate().then( () =>{
//        console.log("hello world");
       
// }).catch(() =>{
//        console.log("jkljkljkl");
       
// })




// const Sequelize= require("sequelize")

// const conf ={
//       host:"localhost",
//       dialect:"mysql"
// }

// const seq = new Sequelize("test","root","123",conf)


// seq.authenticate().then(() =>{
//        console.log("hello world");
       
// }).catch( () =>{
//        console.log("rinima ");
       
// })


// const Sequelize = require("sequelize")


// const conf = { host:"localhost", dialect:"mysql"}

// const seq = new Sequelize('test','root','123',conf)







// module.exports=seq

// seq.authenticate().then( () =>{
//      console.log("ok");
     
// }).catch( () =>{
//       console.log("error")
// })