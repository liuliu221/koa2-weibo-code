const { User, Blog } =require('./model')


!(async function(){
      
//     const zhangsan = await User.findOne({
//          where:{
//               userName:'zhangsan'
//          }
//     }) 


//     console.log("zhangsan: ", zhangsan.dataValues)

//    //查询特定的列
//      const zhangsan2= await User.findOne({
//           attributes:['userName','nickName'],
//           where:{
//                userName:'zhangsan'
//           }
//      })

//      console.log("zhangsan : ", zhangsan2.dataValues);
     
// 查询一个列表
//   cls


    // const persons2 = await User.findAll({
    //        limit:1,
    //        offset:1
    // })

    // console.log(persons2.map(person => person.dataValues));
     
     const persons = await User.findAndCountAll({
            limit:2,
            offset:0,
            order:[
                ['id','desc']
            ]
     })

     console.log("persons " , persons.count);
     
    
})()