 
const Sequelize=require("sequelize")

const seq=require('./seq')

seq.define("user",{
       userName:{
              type:Sequelize.STRING,
              allowNull:false
       }
       ,
       password:{
               type:Sequelize.STRING,
               allowNull:false
       }
       ,
       nickName:{
              type:Sequelize.STRING
       }
});

module.exports={
       User
}

// const Sequelize=require("sequelize")

// const seq= require('./seq')

// const User = seq.define("user",{
//         userName:{
//             type:Sequelize.STRING,
//             allowNull:false
//         }
//         ,
//         password:{
//                type:Sequelize.STRING,
//                allowNull:false
//         }
//         ,
//         nickName:{
//                type:Sequelize.STRING,
//                allowNull:false
//         }

// });

// module.exports={
//          User
// }



// const  Sequelize = require("sequelize")

// const seq = require('./seq')

// // 生成后 表名字是 users
// const User = seq.define("user",{
//      // id 自动创建 并自增
//       userName : {
//             type: Sequelize.STRING,
//             allowNull:false
//       },
//       password:{
//              type:Sequelize.STRING,
//              allowNull :false
//       },
//       nickName:{
//            type : Sequelize.STRING
//       }

// }) 


// module.exports={
//        User
// }