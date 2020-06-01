const Sequelize= require("sequelize")

const seq=require('./seq')





const User = seq.define("user",{
    // id 是自增的
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
})

const Blog=seq.define('blog',{
      title:{
          type:Sequelize.STRING,
          allowNull:false
      },
      content:{
          type:Sequelize.STRING,
          allowNull:false
      }
      ,
      userId:{
          type:Sequelize.INTEGER,
          allowNull:false
      }
})

Blog.belongsTo(User, {
      foreignKey:'userId'
})

User.hasMany(Blog,{
      foreignKey:'userId'
})


module.exports={
     User,
     Blog
}

