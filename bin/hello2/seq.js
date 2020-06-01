const Sequelize=require("sequelize")

const conf ={
     host:"localhost",
     dialect:"mysql"
}


const seq=new Sequelize("weibo","root","123",conf)

module.exports= seq


// const Sequelize=require("sequelize")


// const conf ={
//      host:"localhost",
//      dialect:"mysql"
// }


// const seq=new Sequelize("weibo","root","123",conf)


// module.exports= seq