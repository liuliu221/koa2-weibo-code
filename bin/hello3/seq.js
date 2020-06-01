const Sequelize = require("sequelize")


const conf = {
      host:"localhost",
      dialect:"mysql"
}
//线上环境使用连接池
// conf.pool={
      
//     max:5,
//     min:0,
//     idle:10000

// }


const seq=new Sequelize("weibo","root","123",conf)


module.exports = seq


// seq.authenticate().then(()=>{
//        console.log("hello world");
       
// }).catch(() =>{
//        console.log("nidaye ");
       
// })